import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import "../../assests/styles/landing.scss";
import ImgCategoryLine from "../../assests/image/landing-category-line.png";
import ImgEllipse from "../../assests/image/ellipse.png";
import ImgContentBg from "../../assests/image/shapeBg.png";
import newsMarkBbc from "../../assests/image/news-mark-bbc.png";
import newsMarkTwsj from "../../assests/image/news-mark-twsj.png";
import newsMarkTc from "../../assests/image/news-mark-tc.png";
import newsMarkNewyork from "../../assests/image/news-mark-newyork.png";
import newsMarkForbes from "../../assests/image/news-mark-forbes.png";
import ImgInfoIcon from "../../assests/image/icon-info.png";
import { ReactComponent as Share } from "../../assests/image/share.svg";
import { ReactComponent as Icon } from "../../assests/image/Icon.svg";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useCollapse } from "react-collapsed";
import { useCollapse as expandReference } from "react-collapsed";
import { useCollapse as expand1 } from "react-collapsed";
import { useCollapse as expand2 } from "react-collapsed";
import { useCollapse as expand3 } from "react-collapsed";

function Landing(props) {
  const [EnablePredictions, setEnablePredictions] = useState(true);
  const [active, setActive] = useState(1);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const {
    getCollapseProps: getCollapseProps1,
    getToggleProps: getToggleProps1,
    isExpanded: isExpanded1,
  } = expandReference();

  const {
    getCollapseProps: getCollapseProps2,
    getToggleProps: getToggleProps2,
    isExpanded: isExpanded2,
  } = expand1();

  const {
    getCollapseProps: getCollapseProps3,
    getToggleProps: getToggleProps3,
    isExpanded: isExpanded3,
  } = expand2();

  const {
    getCollapseProps: getCollapseProps4,
    getToggleProps: getToggleProps4,
    isExpanded: isExpanded4,
  } = expand3();

  return (
    <div className="landing">
      <div className="category">
        <div className="title">
          <div className="brush">
            <h4 className="main">
              A Comprehensive Snapshot of Everything NEWS
            </h4>
          </div>
          <div className="guide">
            <span className="your-news-title">Your News - In a Flash</span>
            <Button className="check-button">Check It Out</Button>
          </div>
        </div>
        <div className="category-button entertainment-button">
          <span className="category-text entertainment-text">
            Entertainment
          </span>
        </div>
        <div className="category-button sports-button">
          <span className="category-text sports-text">Sports</span>
        </div>
        <div className="category-button politics-button">
          <span className="category-text politics-text">Politics</span>
        </div>
        <div className="category-button business-finance-button">
          <span className="category-text business-finance-text">
            Business & Finance
          </span>
        </div>
        <div className="category-button technology-button">
          <span className="category-text technology-text">Technology</span>
        </div>
        <div className="category-button lifestyle-button">
          <span className="category-text lifestyle-text">Lifestyle</span>
        </div>
        <div className="category-button health-medicine-button">
          <span className="category-text health-medicine-text">
            Health & Medicine
          </span>
        </div>
        <img className="category-line" src={ImgCategoryLine} />
        <div className="result">
          <div className="account">
            <img src={ImgEllipse} className="ellipse account-ellipse"></img>
            <div className="result-text account-text">
              <span className="result-number account-number">1,200 </span>
              <span className="result-title account-title">
                Early Access Accounts{" "}
              </span>
            </div>
          </div>
          <div className="condense">
            <img src={ImgEllipse} className="ellipse condense-ellipse"></img>
            <div className="result-text condense-text">
              <span className="result-number condense-number">10,000+</span>
              <span className="result-title condense-title">
                Articles Condensed
              </span>
            </div>
          </div>
          <div className="article">
            <img src={ImgEllipse} className="ellipse article-ellipse"></img>
            <div className="result-text article-text">
              <span className="result-number article-number">10+</span>
              <span className="result-title article-title">
                Article Categories
              </span>
            </div>
          </div>
        </div>
        <img className="shapeBg" src={ImgContentBg} alt="shapeBg" />
      </div>

      <div className="content">
        <div className="news-mark">
          <img src={newsMarkBbc} className="mark-bbc" />
          <img src={newsMarkTwsj} className="mark-twsj" />
          <img src={newsMarkTc} className="mark-tc" />
          <img src={newsMarkNewyork} className="mark-newyork" />
          <img src={newsMarkForbes} className="mark-forbes" />
        </div>
        <div className="content-body">
          <div className="content-left-sider">
            <div className="select-date-type">
              <Tabs>
                <TabList>
                  <Tab>Today</Tab>
                  <Tab>Week</Tab>
                  <Tab>Month</Tab>
                </TabList>
                {/* <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel> */}
              </Tabs>
              {/* <Button className="button-select button-select-active button-select-today">
                Today
              </Button>
              <Button className="button-select button-select-week">Week</Button>
              <Button className="button-select button-select-month">
                Month
              </Button> */}
            </div>
            <div className="predictioncheckboxdiv">
              <input
                type="checkbox"
                defaultChecked={EnablePredictions}
                onChange={(e) =>
                  setEnablePredictions(e.target.checked)
                }></input>
              <span className="predictioncheckbox">Enable Predictions</span>
            </div>

            <ul className="tabssidebar list-category">
              <li
                className={active === 1 ? "list-item active" : "list-item "}
                onClick={() => setActive(1)}>
                At a Glance
              </li>
              <li
                className={active === 2 ? "list-item active" : "list-item "}
                onClick={() => setActive(2)}>
                Politics
              </li>
              <li
                className={active === 3 ? "list-item active" : "list-item "}
                onClick={() => setActive(3)}>
                Biz & Finance
              </li>
              <li
                className={active === 4 ? "list-item active" : "list-item "}
                onClick={() => setActive(4)}>
                Entertainment
              </li>
              <li
                className={active === 5 ? "list-item active" : "list-item "}
                onClick={() => setActive(5)}>
                Science & Tech
              </li>
              <li
                className={active === 6 ? "list-item active" : "list-item "}
                onClick={() => setActive(6)}>
                Sports
              </li>
              <li
                className={active === 7 ? "list-item active" : "list-item "}
                onClick={() => setActive(7)}>
                Web3
              </li>
              <li
                className={active === 8 ? "list-item active" : "list-item "}
                onClick={() => setActive(8)}>
                Biz & Finance
              </li>
              <li className="more list-further">+ 5 More!</li>
            </ul>
          </div>
          <div className="content-right-sider">
            <div className="card card-content margin-b-13">
              <div className="spanhead">
                <span className="topheadcard">
                  Most relevant news of the Day:
                </span>
                <div style={{ paddingLeft: "59%" }}>
                  <Share />
                </div>
              </div>
              <div className="card-content-title">asdfasdadsadsfasd</div>
              <div className="card-content-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tinsectetuer adipiscing elit, sed
                Lorem ipsum dolor sit amet, consectncidunt ut laoreet dolore
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              </div>
              <div className="card-content-title">asdfasdadsadsfasd</div>
              <div className="card-content-body">
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat,Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis
              </div>
              <div className="card-content-title">asdfasdadsadsfasd</div>

              <div className="card-content-body">
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esa commodo consequat. Duis
                autem vel eum iriure dolor in hendrerit in vulputate velit esa
                commodo consequat. Duis autem vel eum iriure dolor in hendrerit
                in vulputate velit esseriure dolor in hendrerit in vulputate
                velit esa commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esseriure dolor in hendrerit in
                vulputate velit esa commodo consequat. Duis autem vel eum iriure
                dolor in hendrerit in vulputate velit esse molestie
                consequat,Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed
                <br />
                {/* <span className="expand" style={{ paddingLeft: "50%" }}>
                  Expand+
                </span> */}
                <section {...getCollapseProps()}>
                  commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esseriure dolor in hendrerit in
                  vulputate velit esa commodo consequat. Duis autem vel eum
                  iriure dolor in hendrerit in vulputate velit esseriure dolor
                  in hendrerit in vulputate velit esa commodo consequat. Duis
                  autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat,Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed
                </section>
                <span
                  {...getToggleProps()}
                  className="expand"
                  style={{ paddingLeft: "50%" }}>
                  {isExpanded ? "Collapse-" : "Expand+"}
                </span>
              </div>
            </div>
            <div className="summaryRef">
              <div className="card card-setting-denisty margin-r-13">
                <div className="card-setting-title">
                  <div>Set Summary Density</div>
                  <Slider />
                </div>
                <div className="card-setting-body"></div>
              </div>
              <div className="card card-setting-references">
                <div className="card-setting-title">References</div>
                <div className="card-setting-body">
                  <div className="news-list">
                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>

                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>

                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>

                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>

                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>

                    <div className="news-list-item">
                      <div className="news-title">BBC</div>
                      <div className="news-link">
                        https://www.loremipsum.com
                      </div>

                      <img src={ImgInfoIcon} className="news-info-icon" />
                    </div>
                    <section {...getCollapseProps1()}>
                      <div className="news-list-item">
                        <div className="news-title">BBC</div>
                        <div className="news-link">
                          https://www.loremipsum.com
                        </div>

                        <img src={ImgInfoIcon} className="news-info-icon" />
                      </div>

                      <div className="news-list-item">
                        <div className="news-title">BBC</div>
                        <div className="news-link">
                          https://www.loremipsum.com
                        </div>

                        <img src={ImgInfoIcon} className="news-info-icon" />
                      </div>

                      <div className="news-list-item">
                        <div className="news-title">BBC</div>
                        <div className="news-link">
                          https://www.loremipsum.com
                        </div>

                        <img src={ImgInfoIcon} className="news-info-icon" />
                      </div>
                    </section>
                    <div
                      {...getToggleProps1()}
                      className=" reference-show-all"
                      style={{ paddingLeft: "50%" }}>
                      {isExpanded1 ? (
                        <>
                          <>
                            <Icon
                              className="upicon"
                              style={{ transform: "rotate(180deg)" }}
                            />
                            <Link className="link">Show less</Link>
                          </>
                        </>
                      ) : (
                        <>
                          <Icon className="downicon" />
                          <Link className="link">Show All</Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {EnablePredictions === true ? (
              <div className="Predictions">
                <div>
                  <span>Predicted Scenarios:</span>
                  <br />
                  <span className="disclaimer">
                    *Disclaimer* blah blah blah
                  </span>
                </div>
                <div className="boxes">
                  <div className="box">
                    <h6 className="headerbox">Most Likely</h6>
                    <ul className="boxInner">
                      <li>blah blah blah blah blah blah blah blah</li>
                      <li>blah blah blah blah blah blah blah blah</li>
                      <li>blah blah blah blah blah blah blah blah</li>
                      <section {...getCollapseProps2()}>
                        <li>blah blah blah blah blah blah blah blah</li>
                        <li>blah blah blah blah blah blah blah blah</li>
                        <li>blah blah blah blah blah blah blah blah</li>
                      </section>
                    </ul>

                    <span {...getToggleProps2()} className="expand">
                      {isExpanded2 ? "Collapse-" : "Expand+"}
                    </span>
                  </div>
                  <div className="box">
                    <h6 className="headerbox">Possible </h6>
                    <ul className="boxInner1">
                      <li>blah blah blah blah blah blah blah blah</li>
                      <li>blah blah blah blah blah blah blah blah</li>
                      <li>blah blah blah blah blah blah blah blah</li>
                      <section {...getCollapseProps3()}>
                        <li>blah blah blah blah blah blah blah blah</li>
                        <li>blah blah blah blah blah blah blah blah</li>
                        <li>blah blah blah blah blah blah blah blah</li>
                      </section>
                    </ul>

                    <span {...getToggleProps3()} className="expand">
                      {isExpanded3 ? "Collapse-" : "Expand+"}
                    </span>
                  </div>
                  <div className="box">
                    <h6 className="headerbox">Not Likely</h6>
                    <ul className="boxInner">
                      <li>blah blah blah blah blah blah blah blah</li>
                      <li>blah blah blah blah blah blah blah blah</li>
                      <li>blah blah blah blah blah blah blah blah</li>
                      <section {...getCollapseProps4()}>
                        <li>blah blah blah blah blah blah blah blah</li>
                        <li>blah blah blah blah blah blah blah blah</li>
                        <li>blah blah blah blah blah blah blah blah</li>
                      </section>
                    </ul>

                    <span {...getToggleProps4()} className="expand">
                      {isExpanded4 ? "Collapse-" : "Expand+"}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="content-qna">
          <div className="content-qna-item-active">
            <div className="content-title content-qna-question">
              What is NewsFlash?
            </div>
            <div className="content-title-line content-qna-question-line" />
            <div className="content-qna-answer">
              Blah Blah Blah Blah blah Blah Blah Blah Blah Blah blah Blah Blah
              Blah Blah Blah blah Blah Blah Blah Blah Blah blah Blah Blah Blah
              Blah Blah blah Blah Blah Blah Blah Blah blah Blah
            </div>{" "}
          </div>
          <div className="content-qna-select">
            <div className="conetnt-qna-slecet-item select-first-qna conetnt-qna-slecet-item-active"></div>
            <div className="conetnt-qna-slecet-item select-second-qna"></div>
            <div className="conetnt-qna-slecet-item select-third-qna"></div>
          </div>
        </div>
        <div className="content-contact">
          <div className="content-title content-contact-title">
            Get in Contact
          </div>
          <div className="content-title-line content-contact-title-line"></div>
          <div className="contact-body">
            <Input
              type="select"
              value="How Can We Help?"
              defaultValue="How Can We Help?"
              placeholder="How Can We Help?"
              className="select-question">
              How Can We Help?
            </Input>
            <div className="div-contact-two-input-items">
              <Input
                placeholder="Name*"
                className="input-contact input-item-name"></Input>
              <div className="div-item-space" />
              <Input
                placeholder="Email*"
                className="input-contact input-item-email"></Input>
            </div>
            <div className="div-contact-two-input-items">
              <Input
                placeholder="Phone"
                className="input-contact input-item-phone"></Input>
              <div className="div-item-space" />
              <Input
                placeholder="Organize"
                className="input-contact input-item-organize"></Input>
            </div>
            <Input
              placeholder="Message*"
              className="input-contact-message"
              type="textarea"></Input>
            <span className="contact-button">Send</span>
          </div>
        </div>

        {/* <Wave /> */}
      </div>
    </div>
  );
}

export default Landing;
