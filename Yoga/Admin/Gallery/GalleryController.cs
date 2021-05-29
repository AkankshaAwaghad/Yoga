using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Yoga.Models;


namespace Yoga.Admin.Gallery
{
    public class GalleryController : Controller
    {
        // GET: Gallery
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Gallerylist()
        {
            return View();
        }

        public ActionResult SaveGallery(GalleryModel model)
        {
            try
            {
                HttpPostedFileBase fb = null;
                for (int i = 0; i < Request.Files.Count; i++)
                {
                    fb = Request.Files[i];

                }
                return Json(new { message = (new GalleryModel().SaveGallery(fb, model)) }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {

                {
                    return Json(new { model = ex.Message }, JsonRequestBehavior.AllowGet);
                }

            }



        }

        public ActionResult DisplayGallerylist()
        {
            try
            {
                return Json(new { model = (new GalleryModel().DisplayGallerylist()) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}

    
