
import './App.css';
import LogoutModal from './LogoutModal';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      body id="page-top">

{/* <!-- Page Wrapper --> */}
<div id="wrapper">

    {/* <!-- Sidebar --> */}
    <Sidebar />
   
    {/* <!-- End of Sidebar --> */}

    {/* <!-- Content Wrapper --> */}
        <div className="card bg-info text-white shadow">
                                    <div className="card-body">
                                        Info
                                        <div className="text-white-50 small">#36b9cc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-warning text-white shadow">
                                    <div className="card-body">
                                        Warning
                                        <div className="text-white-50 small">#f6c23e</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-danger text-white shadow">
                                    <div className="card-body">
                                        Danger
                                        <div className="text-white-50 small">#e74a3b</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-secondary text-white shadow">
                                    <div className="card-body">
                                        Secondary
                                        <div className="text-white-50 small">#858796</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-light text-black shadow">
                                    <div className="card-body">
                                        Light
                                        <div className="text-black-50 small">#f8f9fc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-dark text-white shadow">
                                    <div className="card-body">
                                        Dark
                                        <div className="text-white-50 small">#5a5c69</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6 mb-4">

                        <!-- Illustrations -->
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;"
                                        src="img/undraw_posting_photo.svg" alt="...">
                                </div>
                                <p>Add some quality, svg illustrations to your project courtesy of <a
                                        target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                    constantly updated collection of beautiful svg images that you can use
                                    completely free and without attribution!</p>
                                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                    unDraw &rarr;</a>
                            </div>
                        </div>

                        <!-- Approach -->
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                            </div>
                            <div className="card-body">
                                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                    CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                    custom components and custom utility classNamees.</p>
                                <p className="mb-0">Before working with this theme, you should become familiar with the
                                    Bootstrap framework, especially the utility classNamees.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <!-- /.container-fluid -->

        
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2021</span>
                </div>
            </div>
        </footer>
        <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

</div>
<!-- End of Page Wrapper -->

<!-- Scroll to Top Button-->
<a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up"></i>
</a>

{/* <!-- Logout Modal--> */}
<LogoutModal />

{/* <!-- Bootstrap core JavaScript-->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Core plugin JavaScript-->
<script src="vendor/jquery-easing/jquery.easing.min.js"></script>

<!-- Custom scripts for all pages-->
<script src="js/sb-admin-2.min.js"></script>

<!-- Page level plugins -->
<script src="vendor/chart.js/Chart.min.js"></script>

<!-- Page level custom scripts -->
<script src="js/demo/chart-area-demo.js"></script>
<script src="js/demo/chart-pie-demo.js"></script> */}

</body>
    </div>
  );
}

export default App;
