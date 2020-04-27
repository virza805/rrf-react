import Head from "next/head";
import LeftSidebar from "../../components/admin/LeftSidebar";
import AdminProductsList from "../../components/admin/AdminProductsList";

function products() {
  return (
    <div className="admin-panel">
      <Head>
        <link rel="stylesheet" href="/static/admin.css" />
        <title>Avocado Admin - Products</title>
      </Head>
      <LeftSidebar />
      <div className="right-admin-content">
        <div className="container">
          <div className="row">
            <div className="col">
              <AdminProductsList />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default products;