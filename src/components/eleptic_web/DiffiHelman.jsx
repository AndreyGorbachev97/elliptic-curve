import React, { Component, Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class DiffiHelman extends Component {
    render() { 
        const {xDH, yDH, secret_keyA_DH, secret_keyB_DH, handleChange, requestResultDH, a, m, resultDH} = this.props 
        return (
            <Fragment>
                <Grid item xs={12} sm={12}>
                    <Paper square elevation={8}>
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'center'}}> 
                            
                            <TextField
                                label="x"
                                value={xDH}
                                onChange={handleChange('xDH')}
                                margin="normal"
                            />
                            <TextField
                                label="y"
                                value={yDH}
                                onChange={handleChange('yDH')}
                                margin="normal"
                            />
                        </Grid> 
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'space-around'}}>                 
                                <TextField
                                    label="секретный ключ Алисы(a)"
                                    value={secret_keyA_DH}
                                    onChange={handleChange('secret_keyA_DH')}
                                    margin="normal"
                                />
                                <TextField
                                    label="секретный ключ Боба(b)"
                                    value={secret_keyB_DH}
                                    onChange={handleChange('secret_keyB_DH')}
                                    margin="normal"
                                />
                        </Grid>
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'space-around'}}>                 
                                <TextField
                                    label="а * B"
                                    value={resultDH.pointAlice ? `${resultDH.pointAlice.x},${resultDH.pointAlice.y}` : ''}
                                    margin="normal"
                                />
                                <TextField
                                    label="b * B"
                                    value={resultDH.pointBob ? `${resultDH.pointBob.x},${resultDH.pointBob.y}`: ''}
                                    margin="normal"
                                />
                        </Grid>   
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'space-around'}}>                 
                                <TextField
                                    label="Результат Алисы"
                                    value={resultDH.key_Alice ? `${resultDH.key_Alice.x},${resultDH.key_Alice.y}`: ''}
                                    margin="normal"
                                />
                                <TextField
                                    label="Результат Боба"
                                    value={resultDH.key_Bob ? `${resultDH.key_Bob.x},${resultDH.key_Bob.y}` : ''}
                                    margin="normal"
                                />
                        </Grid>  
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'center'}}>      
                            <Button color="primary" variant="outlined" style={{marginBottom: '2%'}} onClick={() => {
                                this.props.requestResultDH({
                                    p:{x: Number(xDH), y: Number(yDH) },
                                    keyA: Number(secret_keyA_DH),
                                    keyB: Number(secret_keyB_DH),
                                    a: Number(a),                                                 
                                    m: Number(m),
                                })
                            }}>
                                считать
                            </Button>
                        </Grid>             
                    </Paper>  
                </Grid>
            </Fragment>
        )
    }
}

export default DiffiHelman