import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {
    Container, Right,
    Content, Header, Button, Icon, Text,
    StyleProvider, Body, Left, Title,
    Col, Row, Grid
} from 'native-base';
import getTheme from '../components/native-base-theme/components';
import {Stocks as StocksActions} from '../actions/index'
import {connect} from "react-redux";


class Stocks extends Component {

    componentDidMount() {
        const {getStocks} = this.props;

        getStocks();

        setInterval(() => getStocks(), 15000)
    }

    render() {

        const {stocks, getStocks} = this.props;

        return (
            <StyleProvider style={getTheme()}>
                <Container>
                    <Header line>
                        <Left/>
                        <Body>
                        <Title>
                            {stocks.length ? 'Cписок валют' : 'Загрузка...'}
                        </Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={getStocks}>
                                <Icon name='ios-refresh-outline' />
                            </Button>
                        </Right>
                    </Header>
                    <Content style={styles.content}>
                        <Grid>
                            {
                                [
                                    'name',
                                    'volume',
                                    'amount'
                                ].map((item, index) => (
                                    <Col style={styles.col} key={index}>
                                        <Text style={styles.text}>{item}</Text>
                                    </Col>
                                ))
                            }
                        </Grid>
                        <Grid>
                            {
                                stocks.length && stocks.map((item, index) => (
                                    <Row key={index}>
                                        {
                                            [
                                                item.name,
                                                item.volume.toFixed(0),
                                                item.price.amount.toFixed(2)
                                            ].map((val, index) => (
                                                <Col style={styles.col} key={index}>
                                                    <Text style={styles.text}>{val}</Text>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                ))
                            }
                        </Grid>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}

const mapStateToProps = state => {
    return {
        stocks: state.stocks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getStocks: () => dispatch(StocksActions.loadStocks()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
    col: {
        flex: 1,
        height: 50,
        borderBottomWidth: 1/2,
        borderColor: 'grey',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        paddingLeft: 15,
        paddingRight: 15,
    }
});