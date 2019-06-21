using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ReactGithubProject.Service.Models {
    public class RepositoryModel {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public string AuthorAvatarUrl { get; set; }
        [Required]
        public string Url { get; set; }
    }
}