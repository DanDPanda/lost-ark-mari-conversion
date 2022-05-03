import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import { StyledTableCell, StyledTableRow } from '../styles/mari-styles';
import { getMariItemData } from '../data/mari-data';


function Mari() {
    const [goldCost, setGoldCost] = useState<number>(600);
    const goldOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => setGoldCost(Number(e.target.value));

    return (
        <div>
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
                <TextField
                    onChange={goldOnChangeEvent}
                    variant="standard"
                    defaultValue={goldCost}
                    style={{ color: "white", display: "inline-block", backgroundColor: "white" }}
                />
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
                            {getMariItemData(goldCost).map((mariItemData) => (
                                <StyledTableRow key={mariItemData.itemName}>
                                    <StyledTableCell component="th" scope="row">
                                        <div>
                                            <img width="50px" height="50px" src={mariItemData.image} style={{ verticalAlign: "middle", marginRight: "10px" }} />
                                            <div style={{ display: "inline-block" }}>
                                                {mariItemData.itemName}
                                            </div>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <div>
                                            {mariItemData.goldCostOfItem} gold
                                        </div>
                                        <div style={{ display: "inline-block", color: "grey" }}>
                                            ({mariItemData.mariShopQuantity} / {mariItemData.mariShopBlueStoneCost}) * ({goldCost} / 95)
                                        </div>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div >
    );
}

export default Mari;