import Head from "next/head";
import CreateProduct from "../../components/admin/CreateProduct";
import LeftSidebar from "../../components/admin/LeftSidebar";

function index() {
  return (
    <div className="admin-panel">
      <Head>
        <link rel="stylesheet" href="/static/admin.css" />
        <title>Avocado Admin - Dashboard</title>
      </Head>
      <LeftSidebar />
      <div className="right-admin-content">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Dashboard</h3>
              <CreateProduct />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;