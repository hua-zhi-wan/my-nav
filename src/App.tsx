import { Avatar, Card, Col, Divider, Layout, Menu, PageHeader, Row } from 'antd';

import './App.css'

import { CardItemData, ContentData } from './Content';
import content from './content.json'
import { GithubOutlined, RightCircleOutlined, TagOutlined, UserOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';


const contentData: ContentData[] = content
console.log(contentData)

const menuList = contentData.map((menu: ContentData, index: number) => (
    <Menu.Item
        key={`menu-item-${index}`}
        icon={<RightCircleOutlined />}
        onClick={() => {
            document.getElementById('main-content')!.scrollTo({
                top: document.getElementById(`title-${index}`)!.offsetTop,
                behavior: 'smooth'
            });
        }}
    >
        {menu.name}
    </Menu.Item>
));

const webStacks = contentData.map((menu: ContentData, index: number) => (
    <>
        <Title
            level={4}
            id={`title-${index}`}
        ><TagOutlined /> {menu.name}
        </Title>
        <div>
            <Row>
                {menu.cards.map((webItem: CardItemData) => (
                    <Col xl={8} lg={12} xs={24}>
                        <Card
                            hoverable
                            onClick={() => { window.open(webItem.url) }}
                            style={{
                                margin: '1em'
                            }}
                        >
                            <Card.Meta
                                avatar={<Avatar size={48} src={webItem.logo} icon={<UserOutlined />} />}
                                title={webItem.title}
                                description={webItem.desc}
                            ></Card.Meta>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </>
))


const App = () => (
    <Layout className='container'>
        <Layout hasSider>
            <Layout.Sider
                breakpoint='md'
                collapsedWidth='96'
                width={250}
                className="site-layout-background"
                theme='dark'
            >
                <Menu
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}
                >
                    <div style={{
                        textAlign: 'center',
                        padding: '1em'
                    }}>
                        <Avatar size={64} src="favicon.png"></Avatar>
                    </div>
                    {menuList}
                </Menu>
            </Layout.Sider>
            <Layout.Content
                id='main-content'
                style={{
                    overflowY: 'scroll'
                }}>
                <Layout
                    style={{
                        minHeight: '100vh',
                    }}
                >
                    <PageHeader
                        title="花枝丸聚合站"
                        subTitle="这里放着所有花枝丸做的好玩的东西"
                        style={{
                            background: '#fff'
                        }}
                        extra={[
                            <a href='https://github.com/hua-zhi-wan' >
                                <GithubOutlined style={{
                                    fontSize: '1.5em'
                                }} />
                                <span style={{
                                    fontSize: '1.2em'
                                }}> Github</span>
                            </a>,
                        ]}
                    />

                    <Layout.Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {webStacks}
                    </Layout.Content>
                    <Layout.Footer>
                        <Divider />
                        <p> Copyright© 2023 花枝丸聚合 design by hua-zhi-wan</p>
                    </Layout.Footer>
                </Layout>
            </Layout.Content>

        </Layout >
    </Layout >
);

export default App;
