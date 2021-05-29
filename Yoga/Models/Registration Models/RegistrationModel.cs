using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Yoga.Data;
using System.IO;

namespace Yoga.Models
{
    public class RegistrationModel
    {

        public int ID { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public string Fatherhusbandname { get; set; }
        public Nullable<System.DateTime> Dateofbirth { get; set; }
        public Nullable<int> Age { get; set; }
        public string Education { get; set; }
        public string Schoolnameifstudying { get; set; }
        public Nullable<decimal> Weight { get; set; }
        public Nullable<decimal> Height { get; set; }
        public string Occupation { get; set; }
        public string Mobilenumber { get; set; }
        public string Healthissueifanypleasespecify { get; set; }
        public string Address { get; set; }
        public string doyouknowaboutyogaifyespleasespecify { get; set; }

        public string SaveRegistration(HttpPostedFileBase fb, RegistrationModel model)
        {
            string message = "";
            YogaNerPEntities db = new YogaNerPEntities();
            string filePath = "";
            string fileName = "";
            string sysFileName = "";


            if (fb != null && fb.ContentLength > 0)
            {
                filePath = HttpContext.Current.Server.MapPath("~/Content/img/");
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
                    string afileName = HttpContext.Current.Server.MapPath("~/Content/imgs/") + "/" + sysFileName;

                }
                var saveRegistration = new tblRegistration()
                {

                    Name = model.Name,
                    Photo = sysFileName,
                    Fatherhusbandname = model.Fatherhusbandname,
                    Dateofbirth = model.Dateofbirth,
                    Age = model.Age,
                    Education = model.Education,
                    Schoolnameifstudying = model.Schoolnameifstudying,
                    Weight = model.Weight,
                    Height = model.Height,
                    Occupation = model.Occupation,
                    Mobilenumber = model.Mobilenumber,
                    Healthissueifanypleasespecify = model.Healthissueifanypleasespecify,
                    Address = model.Address,
                    doyouknowaboutyogaifyespleasespecify = model.doyouknowaboutyogaifyespleasespecify,


                };
                db.tblRegistrations.Add(saveRegistration);
                db.SaveChanges();


            }

            return message;

        }

    }
}