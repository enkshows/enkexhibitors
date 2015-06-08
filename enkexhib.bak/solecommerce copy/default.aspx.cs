using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Enk.Registration;
using System.Data;
using System.Web.Configuration;
using System.Web.Security;

public partial class _default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //Response.Redirect("login.aspx");
        int idxeidint = 0;
				if (Session["idxEID"] == null)
		{
			Response.Write("error");
			Response.Redirect("~/login.aspx?ReturnUrl=%2finfo%2fsolecommerce%2fdefault.aspx");
		}
		else
		{
        Int32.TryParse(Session["idxEID"].ToString(),out idxeidint);
            DataStore da = new DataStore(WebConfigurationManager.ConnectionStrings["ENKRegistrationsConnectionString"].ConnectionString);
            DataTable dt = da.SelectExhibitorByidxEIDShowCode(idxeidint,"FC");//SelectExhibitorByCoNumber(Co);

            if (dt != null && dt.Rows.Count != 0)
            {
                Response.Redirect("index1.aspx");
                }
            else
            {
                Response.Redirect("~/NotAuthorized.aspx");
            }
        
        

        //SELECT * FROM [vwExhibitorShowAndHotelInfo] 
        //WHERE ([ExhibitorID] = @ExhibitorID)
		}
    }
}
