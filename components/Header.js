class Header extends React.Component {

    openMenu = () => {
        console.log('open');
    }
    closeMenu = () => {
        console.log('close');
    }

    render(){
        return(
            <React.Fragment>
                <div className="header_menu">
                    <ul>
                        <li><img src="../../static/image/logo.png" width="100px" height="100px"></img></li>
                        <li onClick={this.openMenu}>=</li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default Header;

