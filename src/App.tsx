import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {TodolistsList} from "./components/TodolistsList/TodolistsList";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {initializedAppTC} from "./store/app-reducer";
import {
    AppBar,
    Button,
    CircularProgress,
    Container,
    IconButton,
    LinearProgress,
    Toolbar,
    Typography
} from "@mui/material";
import {Menu} from "@material-ui/icons";


function App() {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const status = useAppSelector(state => state.app.status)




    useEffect(() => {
        dispatch(initializedAppTC())
    }, [dispatch])

    if (!isInitialized) {
        return <div  style={{position: 'fixed', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <HashRouter>
            <div className="App">
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton edge='start' color='inherit' aria-label='menu'>
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6">
                            MY TODOLIST
                        </Typography>
                        {isLoggedIn && <Button onClick={() => {}} color="inherit">Log out</Button>}
                    </Toolbar>
                    {status === 'loading' && <LinearProgress/>}
                </AppBar>

                <Container fixed>
                    <Routes>
                        <Route path={'/'} element={<TodolistsList/>}/>

                        <Route path='*' element={<Navigate to='/404'/>}/>
                    </Routes>
                </Container>

            </div>



        </HashRouter>

    );
}

export default App;
