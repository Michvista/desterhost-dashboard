import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Search from 'react-bootstrap-icons/dist/icons/search';
import {HouseDoor} from 'react-bootstrap-icons';

function Home() {
    return (
        <>
            <body>
                <div className="header">
                    <img src="logo.png" alt="" />
                    <div className="others d-flex flex-row">
                    <div className="search">
                        <input type="text" className='form-control searchInput' placeholder='Search'/>
                       <Search className="searchIcon" size={17}/>
                    </div>
                    <div className="imgs">
                        <img src="refresh.png" alt="" />
                        <img src="notification.png" alt="" />
                    </div>
                    <div className="user d-flex">
                        <img src="user.png" alt="" />
                        <div className="text d-flex flex-column">
                            <span className='title'>John Doe</span>
                            <span>System Admin</span>
                        </div>
                    </div>
                    </div>
                </div>
                <main>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="sidebar">
                        <p>ACCOUNT</p>
                        <Row>
                            <Col sm={8}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link  eventKey="first"><img src="domains.png" alt=''/></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second"><img src="reports.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third"><img src="account.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fourth"><img src="tickets.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fifth"><img src="subs.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="sixth" className='last'><img src="teams.png" alt="" /></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                        </Row>
                            <hr />
                            <div className="support">
                            <Row>
                <Nav href="" className="flex-column supAndLog">
                        <Nav.Link href="/home"><img src="support.png" alt="" /></Nav.Link>
                        <Nav.Link href=''><img src="logout.png" alt="" /></Nav.Link>
                            </Nav>
                            </Row>
                            </div>
                    </div>
                    <div className="content">
                    <Tab.Content>
                       <Tab.Pane eventKey="first">
                         <Tab.Container defaultActiveKey="domains">
            <Row>
                <Nav variant="pills">
               <div className="flex">
               <Nav.Item>
                    <Nav.Link eventKey="domains">
                        <div className='domainContTab'>
                            {/* add dropwdonw here */}
                            <div className="imgIcon">
                           <HouseDoor size={20} fontWeight={15} color='#0632BE'  className='house'/>
                            </div>
                           <span>Desterhost.com</span> 
                           <div className="imgIcon">
                           <img src="dropdown.png" alt="" />
                           </div>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="issues">
                        <div className="Tab">
                            <div className="imgIcon">
                                <img src="issues.png" alt="" />
                            </div>
                            <span>Issues</span>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="desterfix" className='changeT'>
                    <div className="Tab">
                        <div className="imgIcon">
                            <img src="desterfix.png" alt="" className='change'/>
                        </div>
                            <span>Desterfix</span>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="reports" className='changeT'>
                    <div className="Tab">
                            <img src="reports (3).png" alt="" className='change'/>
                            <span>Reports</span>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="insight" className='changeT'>
                    <div className="Tab">
                            <img src="insights.png" alt="" className='change'/>
                            <span>Insights</span>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="config">
                    <div className="Tab">
                            <img src="config.png" alt="" />
                            <span>Config</span>
                        </div>
                    </Nav.Link>
                </Nav.Item>
               </div>
                </Nav>
                  <Col sm={9} className='mx-5 my-4'>
                  <Tab.Content>
                  <Tab.Pane eventKey="domains">
                        <p className='display-1'>
                        Hi domain
                        </p>
                    </Tab.Pane>
                  <Tab.Pane eventKey="issues">
                        <p className='display-1'>
                        Hi issues
                        </p>
                    </Tab.Pane>
                  <Tab.Pane eventKey="desterfix">
                        <p className='display-1'>
                        Hi desterfix
                        </p>
                    </Tab.Pane>
                  <Tab.Pane eventKey="reports">
                        <p className='display-1'>
                        Hi reports
                        </p>
                    </Tab.Pane>
                  <Tab.Pane eventKey="insight">
                    <div className="TwoCards">
                        <div className="usageLimit">

                        </div>
                        <div className="domainScore">
                            
                        </div>
                    </div>
                       <div className="cardAccount">
                       <div className="accountCard">
                            <Tab.Container defaultActiveKey="Today">
                                <Row>
                                    <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="Today">
                                            <div className="Txtcontent">
                                          <div className="topTxt">
                                             <p>Total value of assets</p>
                                             <h3>$13,371.01</h3>
                                          </div>
                                            <div className="dummyGraph">
                            <img src="dummyGraph.png" alt="" className='dummyGraph'/>
                                            </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="This Week">
                                            <div className="Txtcontent">
                                          <div className="topTxt">
                                             <p>Total value of assets</p>
                                            <h3>$10,371.01</h3>
                                            </div>
                                            <div className="dummyGraph">
                            <img src="dummyGraph.png" alt="" className='dummyGraph'/>
                                            </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="This Month">
                                            <div className="Txtcontent">
                                          <div className="topTxt">
                                             <p>Total value of assets</p>
                                            <h3>$3,371.01</h3>
                                            </div>
                                            <div className="dummyGraph">
                            <img src="dummyGraph.png" alt="" className='dummyGraph'/>
                                            </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="This Year">
                                            <div className="Txtcontent">
                                          <div className="topTxt">
                                             <p>Total value of assets</p>
                                            <h3>$63,371.01</h3>
                                            </div>
                                            <div className="dummyGraph">
                            <img src="dummyGraph.png" alt="" className='dummyGraph'/>
                                            </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="All Time">
                                            <div className="Txtcontent">
                                          <div className="topTxt">
                                             <p>Total value of assets</p>
                                            <h3>$4,371.01</h3>
                                            </div>
                                            <div className="dummyGraph">
                            <img src="dummyGraph.png" alt="" className='dummyGraph'/>
                                            </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                <Nav variant='pills'>
                                        <div className="captions">
                                    <Nav.Item>
                                        <Nav.Link eventKey="Today" className="custom">
                                            Today
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="This Week" className="custom">
                                            This Week
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="This Month" className="custom">
                                            This Month
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="This Year" className="custom">
                                            This Year
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="All Time" className="custom">
                                            All Time
                                        </Nav.Link>
                                    </Nav.Item>
                                </div>
                                </Nav>
                                </Row>
                            </Tab.Container>
                       </div>
                       </div>
                      <div className="activedomains my-5">
                      <table class="table table-responsive">
                        <thead>
                            <tr>
                            <th scope="col" className='p-3'>Server</th>
                            <th scope="col" className='p-3'>Hosted Assets</th>
                            <th scope="col" className='p-3'>Status</th>
                            <th scope="col" className='p-3'>Action</th>
                            <th scope="col" className='p-3'>Watchlist</th>
                            </tr>
                        </thead>
                            <tbody>
                            <tr>
                                <td rowspan="5">
                                <div className="mainCont">
                                        <img src="windows.png" alt="" className='margin'/>
                                        <span>
                                            Windows server
                                        </span>
                                        </div>
                                </td>
                                <td rowspan="5">
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                </td>
                                <td rowspan="5">
                                    <div className="statusContent">
                                        <span>Protected</span>
                                    </div>
                                    <div className="statusContent">
                                        <span>Recovered</span>
                                    </div>
                                    <div className="statusContent">
                                        <span>Protected</span>
                                    </div>
                                    <div className="statusContent">
                                        <span>Recovered</span>
                                    </div>
                                </td>
                                <td rowspan="5">
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                    <div className="button">
                                    <button href="#" className="btnAction danger">Offline</button>
                                    </div>
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                </td>
                                {/* .multipleLinesOfContent */}
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>

                            {/* nextLine */}
                            <tr>
                            <td rowspan="3">
                            <div className="mainCont">
                                        <img src="linux.png" alt="" className='margin'/>
                                        <span>
                                            Linux RedHart
                                        </span>
                                        </div>
                            </td>
                                <td rowspan="3">
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                </td>
                                <td rowspan="3">
                                    <div className="statusContent">
                                        <span>Protected</span>
                                    </div>
                                    <div className="statusContent">
                                        <span>Recovered</span>
                                    </div>
                                </td>
                                <td rowspan="3">
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                </td>
                                {/* .multipleLinesOfContent */}
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Remove</a></span>
                                        </div>
                                </td>
                            </tr>

                            {/* nextLine */}
                            <tr>
                            <td rowspan="3">
                            <div className="mainCont">
                                        <img src="ubuntu.png" alt="" className='margin'/>
                                        <span>
                                            Ubuntu
                                        </span>
                                        </div>
                            </td>
                                <td rowspan="3">
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                </td>
                                <td rowspan="3">
                                    <div className="statusContent">
                                        <span>Protected</span>
                                    </div>
                                    <div className="statusContent">
                                        <span>Recovered</span>
                                    </div>
                                </td>
                                <td rowspan="3">
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                    <div className="button">
                                    <button href="#" className="btnAction danger">Offline</button>
                                    </div>
                                </td>
                                {/* .multipleLinesOfContent */}
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                             </tbody>
                        </table>
                      </div>
                    </Tab.Pane>
                  <Tab.Pane eventKey="config">
                        <p className='display-1'>
                        Hi config
                        </p>
                    </Tab.Pane>
                  </Tab.Content>
                  </Col>
                            </Row>
                         </Tab.Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                                <Tab.Pane eventKey="third">third tab content</Tab.Pane>
                                <Tab.Pane eventKey="fourth">fourth tab content</Tab.Pane>
                                <Tab.Pane eventKey="fifth">fifth tab content</Tab.Pane>
                                <Tab.Pane eventKey="sixth">sixth tab content</Tab.Pane>
                            </Tab.Content>
                    </div>
              </Tab.Container>
                </main>
            </body>
        </>
    );
}

export default Home;
