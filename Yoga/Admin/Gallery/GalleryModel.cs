﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Yoga.Data;
using System.IO;


namespace Yoga.Admin.Gallery
{
    public class GalleryModel
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }

        public string SaveGallery(HttpPostedFileBase fb, GalleryModel model)
        {
            string message = "";
            YogaNerPEntities db = new YogaNerPEntities();
            string filePath = "";
            string fileName = "";
            string sysFileName = "";


            if (fb != null && fb.ContentLength > 0)
            {
                filePath = HttpContext.Current.Server.MapPath("~/Admin/Content/imgs/");
                DirectoryInfo di = new DirectoryInfo(filePath);
                if (!string.IsNullOrWhiteSpace(fb.FileName))
                {
                    di.Create();
                }
                fileName = fb.FileName;
                sysFileName = DateTime.Now.ToFileTime().ToString() + Path.GetExtension(fb.FileName);
                fb.SaveAs(filePath + "//" + sysFileName);
                if (!string.IsNullOrWhiteSpace(fb.FileName))
                {
                    string afileName = HttpContext.Current.Server.MapPath("~/Admin/Content/imgs/") + "/" + sysFileName;

                }
                var saveGallery = new tblGallery()
                {

                    Title = model.Title,
                    Image = sysFileName,
                };
                db.tblGalleries.Add(saveGallery);
                db.SaveChanges();


            }

            return message;

        }

        public List<GalleryModel> DisplayGallerylist()
        {
            YogaNerPEntities Db = new YogaNerPEntities();
            List<GalleryModel> lstDisplayGallerylist = new List<GalleryModel>();
            var AddDisplayGallerylist = Db.tblGalleries.ToList();
            if (AddDisplayGallerylist != null)
            {
                foreach (var DisplayGallerylist in AddDisplayGallerylist)
                {
                    lstDisplayGallerylist.Add(new GalleryModel()
                    {

                        ID = DisplayGallerylist.ID,
                        Title = DisplayGallerylist.Title,
                        Image = DisplayGallerylist.Image,


                    });

                }


            }
            return lstDisplayGallerylist;
        }
    }
}
    
