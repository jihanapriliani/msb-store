import React from "react";

import AuthenticatedUserLayout from "@/Layouts/AutheticatedUserLayout/Index";

export default function Index() {
    return (
        <AuthenticatedUserLayout>
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="card table-widget">
                        <div className="card-body">
                            <h5 className="card-title">Recent Orders</h5>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Invoice</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <img
                                                    src="../../assets/images/avatars/profile-image.png"
                                                    alt=""
                                                />
                                                Anna Doe
                                            </th>
                                            <td>Modern</td>
                                            <td>#53327</td>
                                            <td>$20</td>
                                            <td>
                                                <span className="badge bg-info">
                                                    Shipped
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <img
                                                    src="../../assets/images/avatars/profile-image.png"
                                                    alt=""
                                                />
                                                John Doe
                                            </th>
                                            <td>Alpha</td>
                                            <td>#13328</td>
                                            <td>$25</td>
                                            <td>
                                                <span className="badge bg-success">
                                                    Paid
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <img
                                                    src="../../assets/images/avatars/profile-image.png"
                                                    alt=""
                                                />
                                                Anna Doe
                                            </th>
                                            <td>Lime</td>
                                            <td>#35313</td>
                                            <td>$20</td>
                                            <td>
                                                <span className="badge bg-danger">
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <img
                                                    src="../../assets/images/avatars/profile-image.png"
                                                    alt=""
                                                />
                                                John Doe
                                            </th>
                                            <td>Circl Admin</td>
                                            <td>#73423</td>
                                            <td>$23</td>
                                            <td>
                                                <span className="badge bg-primary">
                                                    Shipped
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <img
                                                    src="../../assets/images/avatars/profile-image.png"
                                                    alt=""
                                                />
                                                Nina Doe
                                            </th>
                                            <td>Space</td>
                                            <td>#54773</td>
                                            <td>$20</td>
                                            <td>
                                                <span className="badge bg-success">
                                                    Paid
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedUserLayout>
    );
}
