import Head from "next/head";
import LeftSidebar from "../../components/admin/LeftSidebar";
import CreatePost from "../../components/admin/CreatePost";

function addnewpost() {
  return (
    <div className="admin-panel">
      <Head>
        <link rel="stylesheet" href="/static/admin.css" />
        <title>Avocado Admin - Add New Post</title>
      </Head>
      <LeftSidebar />
      
      <div className="right-admin-content">
        <div className="container">
          <div className="row">
            <div className="col">
            <CreatePost />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addnewpost;
