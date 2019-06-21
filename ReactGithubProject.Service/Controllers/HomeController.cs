using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using ReactGithubProject.Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace ReactGithubProject.Service.Controllers {
    public class HomeController : Controller {

        const string REPOSITORIES = "REPOSITORIES";
        // GET: Home
        public ActionResult Index() {
            return View();
        }

        private Dictionary<string, RepositoryModel> Repositores {
            get {
                if (Session[REPOSITORIES] == null) {
                    Session[REPOSITORIES] = new Dictionary<string, RepositoryModel>();
                }
                return Session[REPOSITORIES] as Dictionary<string, RepositoryModel>;
            }
        }


        public ActionResult BookmarkRepository(RepositoryModel repositoryModel) {
            if (ModelState.IsValid) {
                if (!Repositores.ContainsKey(repositoryModel.Url)) {
                    Repositores.Add(repositoryModel.Url, repositoryModel);
                }
                return new HttpStatusCodeResult(HttpStatusCode.OK);
            }
            else {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
        }

        public ActionResult GetBookmarkedRepositories() {

            var bookmarks = JsonConvert.SerializeObject(
                Repositores.Select(repository => repository.Value).ToArray(),
                Formatting.Indented,
                new JsonSerializerSettings {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                });

            return new ContentResult { Content = bookmarks, ContentType = "application/json" };
        }

    }
}