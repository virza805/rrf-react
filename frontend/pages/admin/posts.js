import Head from "next/head";
import LeftSidebar from "../../components/admin/LeftSidebar";
import AdminPostList from "../../components/admin/AdminPostList";

function posts() {
  return (
    <div className="admin-panel">
      <Head>
        <link rel="stylesheet" href="/static/admin.css" />
        <title>Avocado Admin - Posts</title>
      </Head>
      <LeftSidebar />
      <div className="right-admin-content">
        <div className="container">
          <div className="row">
            <div className="col">
              <AdminPostList />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default posts;