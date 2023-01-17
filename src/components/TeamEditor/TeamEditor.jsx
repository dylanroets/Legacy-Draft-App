import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function TeamEditor() {

  const id = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((store) => store.teamEditor);
  const teams = useSelector((store) => store.teams);

  // Nav back to teams
  const backToTeams = () => {
    console.log('nav to teams');
    history.push('/teams');
}

  // Delete Player Click Function
  const deletePlayer = (player) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Removing this player is permanent!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove player!'
    }).then((result) => {
        if (result.isConfirmed) {
          dispatch({ type: 'DELETE_PLAYER', payload: player})
        }
    })
  }

  //Mui table styling
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1e88e5',
        color: theme.palette.common.white,
        fontSize: 18
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
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

  return (
    <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
              <TableRow>
                  <StyledTableCell>Player Photo</StyledTableCell>
                  <StyledTableCell align="left">Player Name</StyledTableCell>
                  <StyledTableCell align="center">Position</StyledTableCell>
                  <StyledTableCell align="center">Player Group</StyledTableCell>
                  <StyledTableCell align="center">Age</StyledTableCell>
                  <StyledTableCell align="center">Height</StyledTableCell>
                  <StyledTableCell align="center">Weight</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {store.map((row) => (
                  <StyledTableRow key={row.player_image}>
                  <StyledTableCell component="th" scope="row"><Stack direction="row" spacing={2}><Avatar alt="player photo" src={row.player_image} sx={{ width: 90, height: 90 }}/></Stack></StyledTableCell>
                  <StyledTableCell align="left">{row.player_name}</StyledTableCell>
                  <StyledTableCell align="center">{row.player_position}</StyledTableCell>
                  <StyledTableCell align="center">{row.player_group}</StyledTableCell>
                  <StyledTableCell align="center">{row.player_age}</StyledTableCell>
                  <StyledTableCell align="center">{row.player_height}</StyledTableCell>
                  <StyledTableCell align="center">{row.player_weight}</StyledTableCell>
                  <StyledTableCell position='right' align='right'>
                      <Box sx={{ '& > :not(style)': { m: 2 } }}>
                          <Fab onClick={() => backToTeams()} size='small' variant="extended">
                              <NavigationIcon sx={{ mr: 1 , color: 'primary' }} />
                              View Teams
                          </Fab>
                          <Fab onClick={() => deletePlayer(row)} size='small' variant="extended" sx={{':hover': { bgcolor: 'rgb(210, 0, 0)', color: 'white'}, backgroundColor: 'rgb(240, 0, 0)', color: 'white'}} aria-label="edit">
                              <DeleteForeverRoundedIcon sx={{ mr: 1 }}/>Delete
                          </Fab>
                      </Box>
                  </StyledTableCell>
                  </StyledTableRow>
              ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  );
}

export default TeamEditor;