import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDatGui from "./ReactDatGui.jsx";

import ThreeTest2 from "./ThreeTest2";


const Body = (props) => {
    return (
        <div id="webgl" style={{ position: "absolute", width: "100%", height: "100%" }}>
            <ThreeTest2 data={props.data} geometry={props.geometry} surface={props.surface} light={props.light} animation={props.animation} />
            <ReactDatGui initialDatState={props.data} geometry={props.geometry} handleUpdate={props.handleUpdate} />
        </div>
    )
}


class MainApp extends React.Component {
    constructor(props) {
        super(props);
        const initialDatState = {
            string: "Camera",
            far: 1000,
            fov: 75,
            near: 1,
            colorObject: "#F1A93A",
            colorLight: "0xffffff",
            lightPosition: 2,
            objectTransform: "translate"
        };
        this.state = {
            geometry: "Hình hộp",
            surface: "default",
            light: "remove",
            animation: "",
            data: initialDatState,
        };

        this.ref = React.createRef();

    }

    handleUpdate = newData =>
        this.setState(prevState => ({
            data: { ...prevState.data, ...newData }
        }));
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="xl" bg="light" variant="light" className="bg">
                    <Navbar.Brand className="pl-5" color="white">Đồ Hoạ 3D</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto" style={{ width: "50%" }}>

                            <NavDropdown title="Geometry" id="collasible-nav-dropdown" className="ml-4 button">
                                <NavDropdown.Item className={this.state.geometry === "Hình hộp" ? "active" : ""} onClick={() => { this.setState({ geometry: "Hình hộp" }) }}>Hình hộp</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Khối cầu" ? "active" : ""} onClick={() => { this.setState({ geometry: "Khối cầu" }) }}>Khối cầu</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Khối Nón" ? "active" : ""} onClick={() => { this.setState({ geometry: "Khối Nón" }) }}>Khối Nón</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Hình khối" ? "active" : ""} onClick={() => { this.setState({ geometry: "Hình khối" }) }}>Hình khối</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Hình khuyến" ? "active" : ""} onClick={() => { this.setState({ geometry: "Hình khuyến" }) }}>Hình khuyến</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Nút thắt hình xuyến" ? "active" : ""} onClick={() => { this.setState({ geometry: "Nút thắt hình xuyến" }) }}>Nút thắt hình xuyến</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Hình ống" ? "active" : ""} onClick={() => { this.setState({ geometry: "Hình ống" }) }}>Hình ống</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Hình ấm trà" ? "active" : ""} onClick={() => { this.setState({ geometry: "Hình ấm trà" }) }}>Hình ấm trà</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Hình tứ diện" ? "active" : ""} onClick={() => { this.setState({ geometry: "Hình tứ diện" }) }}>Hình tứ diện</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Hình khối 8 mặt" ? "active" : ""} onClick={() => { this.setState({ geometry: "Hình khối 8 mặt" }) }}>Hình khối 8 mặt</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Hình khối 12 mặt ngũ giác" ? "active" : ""} onClick={() => { this.setState({ geometry: "Hình khối 12 mặt ngũ giác" }) }}>Hình khối 12 mặt ngũ giác</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.geometry === "Hình khối hai mươi mặt" ? "active" : ""} onClick={() => { this.setState({ geometry: "Hình khối hai mươi mặt" }) }}>Hình khối hai mươi mặt</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Drawing" id="collasible-nav-dropdown" className="ml-4 button">
                                <NavDropdown.Item className={this.state.surface === "point" ? "active" : ""} onClick={() => { this.setState({ surface: "point" }) }}>point</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.surface === "line" ? "active" : ""} onClick={() => { this.setState({ surface: "line" }) }}>line</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => { this.setState({ surface: "default" }) }}>Mặc định</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Texture" id="collasible-nav-dropdown" className="ml-4 button">
                                <NavDropdown.Item className={this.state.surface === "lava" ? "active" : ""} onClick={() => { this.setState({ surface: "lava" }) }}>lava</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.surface === "sunflower" ? "active" : ""} onClick={() => { this.setState({ surface: "sunflower" }) }}>sunflower</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.surface === "standard" ? "active" : ""} onClick={() => { this.setState({ surface: "standard" }) }}>standard</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.surface === "blocks ambient occlusion" ? "active" : ""} onClick={() => { this.setState({ surface: "blocks ambient occlusion" }) }}>blocks ambient occlusion</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.surface === "blocksBump" ? "active" : ""} onClick={() => { this.setState({ surface: "blocksBump" }) }}>blocks bump</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.surface === "sands" ? "active" : ""} onClick={() => { this.setState({ surface: "sands" }) }}>sands</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.surface === "purplemap" ? "active" : ""} onClick={() => { this.setState({ surface: "purplemap" }) }}>purple map</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.surface === "alphaMap" ? "active" : ""} onClick={() => { this.setState({ surface: "alphaMap" }) }}>alpha map</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.surface === "scratch" ? "active" : ""} onClick={() => { this.setState({ surface: "scratch" }) }}>scratch</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => { this.setState({ surface: "default" }) }}>default</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Light" id="collasible-nav-dropdown" className="ml-4 button">
                                <NavDropdown.Item className={this.state.light === "point" ? "active" : ""} onClick={() => { this.setState({ light: "point" }) }}>point</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.light === "ambient" ? "active" : ""} onClick={() => { this.setState({ light: "ambient" }) }}>ambient</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.light === "spot" ? "active" : ""} onClick={() => { this.setState({ light: "spot" }) }}>spot</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.light === "directional" ? "active" : ""} onClick={() => { this.setState({ light: "directional" }) }}>directional</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => { this.setState({ light: "remove" }) }}>Xoá</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Animation" id="collasible-nav-dropdown" className="ml-4 button">
                                <NavDropdown.Item className={this.state.animation === "Bánh xe" ? "active" : ""} onClick={() => { this.setState({ animation: "Bánh xe" }) }}>Bánh xe</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.animation === "Chong chóng" ? "active" : ""} onClick={() => { this.setState({ animation: "Chong chóng" }) }}>Chong chóng</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.animation === "Kim đồng hồ" ? "active" : ""} onClick={() => { this.setState({ animation: "Kim đồng hồ" }) }}>Kim đồng hồ</NavDropdown.Item>
                                <NavDropdown.Item className={this.state.animation === "Bật nhảy" ? "active" : ""} onClick={() => { this.setState({ animation: "Bật nhảy" }) }}>Bật nhảy</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => { this.setState({ animation: "" }) }}>Xoá</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <Body geometry={this.state.geometry} surface={this.state.surface} light={this.state.light} animation={this.state.animation} data={this.state.data} handleUpdate={this.handleUpdate} />
            </>
        );
    }
}


export default MainApp