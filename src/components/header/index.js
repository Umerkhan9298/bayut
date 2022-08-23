import React, { useState, useLayoutEffect } from "react";
import {
  Menu,
  Drawer,
  Switch,
  Collapse,
  Dropdown,
  Badge,
  Row,
  Col,
} from "antd";
import styled from "styled-components";
// import Image from "next/image";
import Link from "next/link";
import { getCookies } from "../../helpers/cookie";

// import { Logo } from "../../../images/index";
import Logo from "../logo";
import Button from "../Button";

//icons
import {
  DownOutlined,
  MenuOutlined,
  BellFilled,
  PlusOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import {
  AiFillBoxPlot,
  AiFillShop,
  AiFillSetting,
  AiFillStar,
  AiFillCloseCircle,
} from "react-icons/ai";
import {
  FaMotorcycle,
  FaUserPlus,
  FaWallet,
  FaHome,
  FaUserAlt,
  FaShoppingCart,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import { BsFilePost, BsFillChatFill } from "react-icons/bs";

const { SubMenu, Item } = Menu;

const Header = () => {
  //=================================================Desktop View==========================================================
  const [theme, setTheme] = useState("light");
  const [scroll, setScroll] = useState(0); // To change background-color of header

  const changeTheme = (e) => {
    if (e === true || scroll > 1) {
      setTheme("light");
    } else {
      setTheme("light");
    }
  };

  /**
   * This useLayoutEffect function is used to change header background-color
   */
  useLayoutEffect(() => {
    changeTheme();

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const Authorized = getCookies("Authorization");

  const { Item } = Menu;

  const menu = (
    <StyledNotificationMenu>
      <p>Area Guides</p>
      <p>Building Guides</p>
      <p>School Guides</p>
    </StyledNotificationMenu>
  );

  const menu1 = (
    <StyledNotificationMenu>
      <p>TruValue™</p>
      <p>Property Prices</p>
      <StyledMenuBadge count={"New"}>
        <p>Dubai Transactions</p>
      </StyledMenuBadge>
      <p>Trends</p>
      <p>New Projects</p>
    </StyledNotificationMenu>
  );

  const menu3 = (
    <StyledNotificationMenu>
      <p>B3DXB 2022</p>
      <p>Your Home Your Choice</p>
    </StyledNotificationMenu>
  );

  const DesktopView = (
    // <StyledMenu mode="horizontal">
    <StyledMenu mode="horizontal" theme={theme}>
      <NavDiv>
        {/* <Item icon={<AppstoreOutlined />}>Home</Item> */}
        <Link href="/">
          <a>
            {/* <Image src={Logo} alt="logo" width={50} height={10} /> */}
            <Logo />
          </a>
        </Link>

        <RightNav>
          <StyledItem>
            <AlignDiv>
              <Link href="/">Blog</Link>
            </AlignDiv>
          </StyledItem>
          <StyledItem>
            <AlignDiv>
              <Link href="/">Find an Agency</Link>
            </AlignDiv>
          </StyledItem>
          <StyledItem>
            <AlignDiv>
              <Link href="/">Floor Plans</Link>
            </AlignDiv>
          </StyledItem>
          <StyledItem>
            <AlignDiv>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Guides
                </a>
              </Dropdown>
              <CaretDownOutlined />
            </AlignDiv>
          </StyledItem>
          <StyledItem>
            <AlignDiv>
              <Dropdown
                overlay={menu1}
                placement="bottomRight"
                trigger={["click"]}
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Market intelligence
                </a>
              </Dropdown>
              <CaretDownOutlined />
            </AlignDiv>
          </StyledItem>
          <StyledItem>
            <AlignDiv>
              <Link href="/">Agent Portal</Link>
            </AlignDiv>
          </StyledItem>
          <StyledItem>
            <AlignDiv>
              <Dropdown
                overlay={menu3}
                placement="bottomRight"
                trigger={["click"]}
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Events
                </a>
              </Dropdown>
              <CaretDownOutlined />
            </AlignDiv>
          </StyledItem>
        </RightNav>
      </NavDiv>
    </StyledMenu>
  );
  //=================================================Desktop View==========================================================

  //=================================================Mobile View==========================================================
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const [theme1, setTheme1] = useState("dark");
  const [scroll1, setScroll1] = useState(0); // To change background-color of header

  const changeTheme1 = (e) => {
    if (e === true || scroll > 1) {
      setTheme1("dark");
    } else {
      setTheme1("light");
    }
  };

  /**
   * This useLayoutEffect function is used to change header background-color
   */
  useLayoutEffect(() => {
    changeTheme1();

    const handleScroll = () => {
      setScroll1(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const showDrawer = () => {
    setVisibleDrawer(true);
  };

  const onClose = () => {
    setVisibleDrawer(false);
  };

  const [visibleDrawer1, setVisibleDrawer1] = useState(false);

  const showDrawer1 = () => {
    setVisibleDrawer1(true);
  };

  const onClose1 = () => {
    setVisibleDrawer1(false);
  };

  const { Panel } = Collapse;

  const MobileView = (
    // <MobileStyledMenu mode="horizontal">
    <MobileStyledMenu mode="horizontal" theme={theme1}>
      <NavDiv1>
        {/* <Menu.Item icon={<MailOutlined />}>Home</Menu.Item> */}
        {/* <Image src={Logo} alt="logo" width={60} height={10} /> */}
        <Link href="/">
          <StyledAnchor>
            <Logo />
          </StyledAnchor>
        </Link>
        <MobileRightNav>
          <Menu.Item icon={<MenuButton onClick={showDrawer} />} />
        </MobileRightNav>
      </NavDiv1>

      <StyledDrawer
        title=""
        placement={"top"}
        // closable={false}
        onClose={onClose}
        visible={visibleDrawer}
      >
        <DrawerContent>
          <StyledCollapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <StyledPlusOutlined rotate={isActive ? 135 : 0} />
            )}
            className="custom-collapse"
          >
            <Panel header="Guides" key="1" className="custom-collapse-panel">
              <StyledPara>
                <Link href="/">Area Guides</Link>
              </StyledPara>
              <StyledPara>
                <Link href="/">Building Guides</Link>
              </StyledPara>
              <StyledPara>
                <Link href="/">School Guides</Link>
              </StyledPara>
            </Panel>
            <Panel
              header="Market Intelligence"
              key="2"
              className="custom-collapse-panel"
            >
              <StyledPara>
                <Link href="/">TruValue™</Link>
              </StyledPara>
              <StyledPara>
                <Link href="/">Property Prices</Link>
              </StyledPara>
              <StyledPara>
                <Link href="/">Dubai Transactions</Link>
              </StyledPara>
              <StyledPara>
                <Link href="/">Trends</Link>
              </StyledPara>
              <StyledPara>
                <Link href="/">New Projects</Link>
              </StyledPara>
            </Panel>
            <Panel header="Events" key="3" className="custom-collapse-panel">
              <StyledPara>
                <Link href="/">B3DXB 2022</Link>
              </StyledPara>
              <StyledPara>
                <Link href="/">Your Home Your Choice</Link>
              </StyledPara>
            </Panel>
          </StyledCollapse>
        </DrawerContent>
      </StyledDrawer>

      <StyledDrawer1
        title=""
        placement={"top"}
        // closable={false}
        onClose={onClose1}
        visible={visibleDrawer1}
      >
        <ProductCath1>Products Categories</ProductCath1>
      </StyledDrawer1>
    </MobileStyledMenu>
  );
  //=================================================Mobile View==========================================================

  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth > 991) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 991) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return <>{isDesktop ? DesktopView : MobileView}</>;
};

export default Header;

//Desktop
const StyledMenu = styled(Menu)`
  padding: 15px 50px !important;
  .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: none !important;
  }
  // position: fixed !important;
  width: 100% !important;
  z-index: 10 !important;
  // background-color: transparent !important;
`;

const NavDiv = styled.div`
  display: flex !important;
  width: 100% !important;
  justify-content: space-between !important;
  a {
    display: flex !important;
  }
`;

const RightNav = styled.div`
  display: flex !important;
  .ant-btn-group {
    display: flex !important;
  }
`;

const MenuButton = styled(MenuOutlined)`
  font-size: 30px !important;
  margin-top: 10px !important;
`;

const ThemeSwitch = styled(Switch)`
  margin-top: 10px !important;
`;

const SubMenuItem = styled(Item)`
  .ant-menu-title-content {
    display: flex !important;
    align-items: center !important;
  }
  color: black !important;
  &: hover {
    color: black !important;
    margin-left: 5px !important;
    transition: all 0.2s ease-in !important;
    transform: scale(1) !important;
  }
  .ant-menu-light .ant-menu-item:hover,
  .ant-menu-light .ant-menu-item-active,
  .ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-light .ant-menu-submenu-active,
  .ant-menu-light .ant-menu-submenu-title:hover {
    background: none !important;
    background-color: #fff !important;
  }
  .ant-menu-light .ant-menu-item:hover,
  .ant-menu-light .ant-menu-item-active,
  .ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-light .ant-menu-submenu-active,
  .ant-menu-light .ant-menu-submenu-title:hover {
    background-color: #fff !important;
  }
`;

const StyledItem = styled(Item)`
  color: #fff !important;
  .ant-menu-item-selected {
    background-color: transparent !important;
  }
`;

const StyledSubMenu = styled(SubMenu)`
  color: #fff !important;
  min-width: 176px !important;
`;

//Mobile
const MobileStyledMenu = styled(Menu)`
  padding: 20px !important;
  .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: none !important;
  }
  // position: fixed !important;
  width: 100% !important;
  z-index: 10 !important;
  background-color: transparent !important;
  .ant-menu-item-active {
    color: #fff !important;
  }
  .anticon-menu {
    svg {
      color: #000 !important;
    }
  }
  .ant-menu-submenu {
    display: none !important;
  }
`;

const MobileRightNav = styled.div`
  margin-inline: -10px !important;
  display: flex !important;
  align-items: start !important;
  .ant-btn-group {
    display: flex !important;
  }
`;

const NavDiv1 = styled.div`
  display: flex !important;
  width: 100% !important;
  justify-content: space-between !important;
`;

const StyledDrawer = styled(Drawer)`
  backgroung-color: rgba(0, 0, 0, 0.5);

  .ant-drawer-content {
    opacity: 0.5 !important;
    background-color: #28b16d;
  }
  .ant-drawer-content-wrapper {
    backdrop-filter: blur(5px) !important;
    height: 650px !important;
  }
  .ant-drawer-close {
    font-size: 40px !important;
    font-weight: bold !important;
    color: #000 !important;
  }
`;

const StyledDrawer1 = styled(Drawer)`
  backgroung-color: rgba(0, 0, 0, 0.5);

  .ant-drawer-content {
    opacity: 0.5 !important;
    background-color: #28b16d;
  }
  .ant-drawer-content-wrapper {
    backdrop-filter: blur(5px) !important;
    height: 650px !important;
  }
  .ant-drawer-close {
    font-size: 40px !important;
    font-weight: bold !important;
    color: #000 !important;
  }
`;

const DrawerContent = styled.div`
  margin-top: 90px;
  @media (max-height: 300px) {
    margin-top: 40px;
  }
`;

const StyledPara = styled.p`
  text-align: center !important;
  font-size: 14px !important;
  font-weight: bolder;
  margin: 20px 0 10px 0;
`;

const AlignDiv = styled.div`
  display: flex !important;
  align-items: center !important;
  .anticon-caret-down {
    color: #000;
  }
`;

const StyledCollapse = styled(Collapse)`
  .ant-collapse-borderless {
    background-color: #181a1b !important;
    color: #fff !important;
  }
  .ant-collapse-header {
    background-color: #181a1b !important;
    color: #fff !important;
    font-size: 14px !important;
    // border-radius: 10px 10px 0 0 !important;
  }
  .ant-collapse {
    background-color: transparent !important;
    border-radius: 10px !important;
  }
  .ant-collapse-content {
    background-color: #181a1b !important;
    color: #fff !important;
  }
  a {
    color: #fff !important;
  }
  .ant-collapse-content {
    // border-radius: 0 0 10px 10px !important;
  }
`;

const StyledPlusOutlined = styled(PlusOutlined)`
  font-size: 14px !important;
`;

const StyledBr = styled.div`
  margin-block: 20px !important;
`;

const ProductCath1 = styled.h1`
  font-size: 20px;
  font-weight: 800;
`;

const StyledNotificationMenu = styled(Menu)`
  width: 180px !important;
  padding: 10px;
  left: 12px;
  border-radius: 5px;
  line-height: 28px;

  h1 {
    margin-bottom: 0px !important;
    margin-inline: 10px !important;
    color: #fff;
  }
  p {
    margin-bottom: 0px !important;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .ant-dropdown-menu-item {
    margin-block: 5px;
    padding: 10px;
    border-radius: 6px;
  }
  backdrop-filter: blur(20px) !important;
  .ant-dropdown-placement-bottomRight {
    left: 690px !important;
  }
`;

const StyledNotificationItem = styled(Item)`
  &:hover {
    border-radius: 6px;
    padding: 10px;
    // background-color: #3a3b3c !important;
    margin-block: 5px;
  }
`;

const StyledBadge = styled(Badge)`
  display: flex !important;
  .ant-badge-count {
    top: 12px;
    right: 12px;
    box-shadow: none !important;
  }
`;

const StyledBadge1 = styled(Badge)`
  .ant-badge-count {
    top: 7px;
    right: -20px;
    box-shadow: none !important;
  }
`;

const BadgeCol = styled(Col)`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const StyledMenuBadge = styled(Badge)`
  .ant-badge-count {
    transform: translate(100%, -70%);
    background-color: #ffeaea;
    color: #ff4d4f;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledAnchor = styled.a`
  display: flex;
`;
