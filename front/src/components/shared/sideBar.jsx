import { Link } from "react-router-dom";
import { IconName } from "react-icons/md";
import "../../assets/css/sidebar.css"

export default (props) => {
	return (
		<nav className="main-menu">
			<ul>
				<li>
					<Link to="/dashboard" className='links'>
						<i className="fa fa-user fa-2x"></i>
						<span className="nav-text">
							Clientes Ativos
						</span>
					</Link>

				</li>
				<li className="has-subnav">
					<Link to="/dashboard/files/Online" className='links'>
						<i className="fa fa-folder-open fa-2x"></i>
						<span className="nav-text">
							Clientes Online
						</span>
					</Link>
				</li>
				<li className="has-subnav">
					<Link to="/dashboard/files/Semi-Presencial" className='links'>
						<i className="fa fa-folder-open fa-2x"></i>
						<span className="nav-text">
							Clientes Semi-Presencial
						</span>
					</Link>
				</li>
				<li className="has-subnav">
					<Link to="/dashboard/files/Presencial" className='links'>
						<i className="fa fa-folder-open fa-2x"></i>
						<span className="nav-text">
							Clientes Presencial
						</span>
					</Link>
				</li>
				<li className="has-subnav">
					<Link to="/dashboard/forms" className='links'>
						<i className="fa fa-graduation-cap fa-2x"></i>
						<span className="nav-text">
							Profissões
						</span>
					</Link>
				</li>
				{/* <li>
							<Link to="/testes" className='links'>
								<i className="fa fa-bar-chart-o fa-2x"></i>
								<span className="nav-text">
									Graficos
								</span>
							</Link>
						</li> */}
			</ul>
		</nav>
	);
}