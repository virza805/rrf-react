import Head from "next/head";
import LeftSidebar from "../../components/admin/LeftSidebar";
import CreateProductd from "../../components/admin/CreateProductd";

function addnewproductd() {
  return (
    <div className="admin-panel">
      <Head>
        <link rel="stylesheet" href="/static/admin.css" />
        <title>Avocado Admin - Add New Product</title>
      </Head>
      <LeftSidebar />
      
      <div className="right-admin-content">
        <div className="container">
          <div className="row">
            <div className="col">
            <CreateProductd />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addnewproductd;
