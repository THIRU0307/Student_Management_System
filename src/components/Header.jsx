import React from "react";

function Header({ onMenuClick }) {
    return (
        <nav className="navbar bg-white shadow app-header">

            <div className="container-fluid">

                {/* Hamburger + Title */}
                <div className="d-flex align-items-center gap-2 flex-grow-1 overflow-hidden">

                    {/* Visible only on phone / tablet */}
                    <button
                        className="btn btn-outline-secondary menu-toggle"
                        type="button"
                        aria-label="Toggle menu"
                        onClick={onMenuClick}
                    >
                        ☰
                    </button>

                    <span className="navbar-brand fw-bold fs-3 mb-0 app-title">
                        Student Management System
                    </span>

                </div>

                {/* User icon, Admin, Logout – always visible */}
                <div className="d-flex align-items-center header-actions">

                    <button
                        className="btn btn-primary border rounded-circle m-1"
                        type="button"
                    >
                        A
                    </button>

                    <span className="fw-bold m-1 admin-label">
                        Admin
                    </span>

                    <button
                        className="btn btn-danger m-1"
                        type="button"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default Header;
