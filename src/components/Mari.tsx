import React from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

type DataType = {
    itemName: string,
    goldCostOfItem: string,
    image: string,
    mariShopBlueStoneCost: number,
    mariShopQuantity: number
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#2E3B55',
        color: theme.palette.common.white,
        fontSize: 24,
        height: 40
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        height: 40
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    itemName: string,
    mariShopBlueStoneCost: number,
    mariShopQuantity: number,
    goldCost: number,
    image: string
): DataType {
    const goldPerBlueCrystal = goldCost / 95;
    const blueCrystalPerQuantity = mariShopBlueStoneCost / mariShopQuantity;
    const goldCostOfItem = (goldPerBlueCrystal * blueCrystalPerQuantity).toFixed(2);

    return { itemName, goldCostOfItem, image, mariShopBlueStoneCost, mariShopQuantity };
}

class Mari extends React.Component<any, { goldCost: number }> {
    constructor(props: any) {
        super(props);
        this.state = {
            goldCost: 600
        }
    }

    onChange = (e: any) => {
        this.setState({
            goldCost: e.target.value
        });
    }

    getRows = (): DataType[] => [
        createData('Guardian Stones (10)', 150, 100, this.state.goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_6_104.png'),
        createData('Destruction Stones (10)', 300, 50, this.state.goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_6_105.png'),
        createData('Greater Honor Leapstones (1)', 50, 5, this.state.goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_7_156.png'),
        createData('Honor Shard Pouch (S) (1)', 112, 20, this.state.goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/money_13.png'),
        createData('Solar Grace (1)', 160, 40, this.state.goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_7_161.png'),
        createData('Solar Blessing (1)', 300, 30, this.state.goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_7_162.png'),
        createData('Solar Protections (1)', 360, 8, this.state.goldCost, 'https://d3planner-assets.maxroll.gg/lost-ark/icons/use_7_163.png'),
    ];

    render() {
        return (
            <header>
                <Typography
                    variant="h3"
                    noWrap
                    component="div"
                    textAlign="center"
                    marginTop="40px"
                    style={{ color: "white" }}
                >
                    Mari Shop Calculator
                </Typography>

                <div style={{ whiteSpace: "nowrap", textAlign: "center", marginTop: "40px" }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        marginRight="10px"
                        style={{ color: "white", display: "inline-block" }}
                    >
                        Gold Cost Per 95 Blue Crystals:
                    </Typography>
                    <TextField onChange={this.onChange} id="blue-crystal-cost" variant="standard" defaultValue={this.state.goldCost} style={{ color: "white", display: "inline-block", backgroundColor: "white" }} />
                </div>

                <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center' }} >
                    <TableContainer component={Paper} style={{ width: "1000px" }}>
                        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Item</StyledTableCell>
                                    <StyledTableCell align="right">
                                        Mari Shop Gold Value
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.getRows().map((row) => (
                                    <StyledTableRow key={row.itemName}>
                                        <StyledTableCell component="th" scope="row">
                                            <div>
                                                <img width="50px" height="50px" src={row.image} style={{ verticalAlign: "middle", marginRight: "10px" }} />
                                                <div style={{ display: "inline-block" }}>
                                                    {row.itemName}
                                                </div>
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <div>
                                                {row.goldCostOfItem} gold
                                            </div>
                                            <div style={{ display: "inline-block" }}>
                                                ({row.mariShopQuantity} / {row.mariShopBlueStoneCost}) * ({this.state.goldCost} / 95)
                                            </div>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </header >
        );
    }
}

export default Mari;