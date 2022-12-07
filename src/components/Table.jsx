import React from 'react';
import styled from 'styled-components'
const Container = styled.div`
    
`
const TableContainer = styled.table`
    border:1px solid #eee;
    border-collapse: collapse;
    margin-top: 15px;
    padding: 8px;

`
const TableHeader = styled.th`
    border:1px solid #eee;
    padding: 8px;
    border-collapse: collapse;
    font-size: 14px;
`
const TableRow = styled.tr`
    
`
const TableBody = styled.tbody`
    
`
const TableData = styled.td`
    border:1px solid #eee;
    border-collapse: collapse;
    min-width: 80px;
    font-size:14px;
    text-align: center;
    padding: 8px;

`

const Table = () => {
    return (
        <Container>
            <TableContainer>
                <TableRow>
                    <TableHeader>Sr</TableHeader>
                    <TableHeader>Time</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Hash</TableHeader>
                </TableRow>
                <TableBody>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>11:30 AM</TableData>
                        <TableData>487</TableData>
                        <TableData>4s8er5s5fe57rjmxnfuewrurks</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>2</TableData>
                        <TableData>12:30 AM</TableData>
                        <TableData>787</TableData>
                        <TableData>4s8er5s5fe57</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>3</TableData>
                        <TableData>10:30 AM</TableData>
                        <TableData>887</TableData>
                        <TableData>4s8er5s5f</TableData>
                    </TableRow>
                </TableBody>
            </TableContainer>

        </Container>
    );
};

export default Table;