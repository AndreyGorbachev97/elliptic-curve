import React, { Component, Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class MessiAmur extends Component {
    render() { 
        const {xMA, yMA, eA, eB, handleChange, requestResultMA, a, m, resultMA, numb_points} = this.props;
        return (
            <Fragment>
                <Grid item xs={12} sm={12}>
                    <Paper square elevation={8}>
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'center'}}> 
                            
                            <TextField
                                label="x"
                                value={xMA}
                                onChange={handleChange('xMA')}
                                margin="normal"
                            />
                            <TextField
                                label="y"
                                value={yMA}
                                onChange={handleChange('yMA')}
                                margin="normal"
                            />
                        </Grid> 
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'space-around'}}>                 
                                <TextField
                                    label="eA"
                                    value={eA}
                                    onChange={handleChange('eA')}
                                    margin="normal"
                                />
                                <TextField
                                    label="eB"
                                    value={eB}
                                    onChange={handleChange('eB')}
                                    margin="normal"
                                />
                        </Grid>
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'space-around'}}>                 
                                <TextField
                                    label="eA * Pm"
                                    value={resultMA.eA_Pm ? `${resultMA.eA_Pm.x},${resultMA.eA_Pm.y}` : ''}
                                    margin="normal"
                                />
                                <TextField
                                    label="eB * eA * Pm"
                                    value={resultMA.eB_eA_Pm ? `${resultMA.eB_eA_Pm.x},${resultMA.eB_eA_Pm.y}` : ''}
                                    margin="normal"
                                />
                        </Grid>
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'space-around'}}>                 
                               
                                 <TextField
                                    label="dA * eB * eA * Pm"
                                    value={resultMA.dA_eB_eA_Pm ? `${resultMA.dA_eB_eA_Pm.x},${resultMA.dA_eB_eA_Pm.y}` : ''}
                                    margin="normal"
                                />
                                   <TextField
                                    label="dB * dA * eB * eA * Pm"
                                    value={resultMA.dB_dA_eB_eA_Pm ? `${resultMA.dB_dA_eB_eA_Pm.x},${resultMA.dB_dA_eB_eA_Pm.y}` : ''}
                                    margin="normal"
                                />
                        </Grid>   
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'center'}}>      
                            <Button color="primary" variant="outlined" style={{marginBottom: '2%'}} onClick={() => {
                                this.props.requestResultMA({
                                    p:{x: Number(xMA), y: Number(yMA) },
                                    eA: Number(eA),
                                    eB: Number(eB),
                                    numb_points: Number(numb_points),
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

export default MessiAmur