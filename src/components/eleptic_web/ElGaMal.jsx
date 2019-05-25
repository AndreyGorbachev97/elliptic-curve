import React, { Component, Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class ElGaMal extends Component {

    state = { 
        Cx: '',
        Cy: '',
        Px: '',
        Py: '',
        e: '',
        k: '',
    }

    render() {

        const handleChange = name => event => {
            this.setState({ [name]: event.target.value });
        };

        const {a, m, requestResultElGam, resultElGam} = this.props 
        const {Cx, Cy, Px, Py, e, k} = this.state
        return (
            <Fragment>
                <Grid item xs={12} sm={12}>
                    <Paper square elevation={8}>
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'center'}}> 
                            
                            <TextField
                                label="Cx"
                                value={Cx}
                                onChange={handleChange('Cx')}
                                margin="normal"
                            />
                            <TextField
                                label="Cy"
                                value={Cy}
                                onChange={handleChange('Cy')}
                                margin="normal"
                            />
                        </Grid> 
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'center'}}> 
                            
                            <TextField
                                label="Px"
                                value={Px}
                                onChange={handleChange('Px')}
                                margin="normal"
                            />
                            <TextField
                                label="Py"
                                value={Py}
                                onChange={handleChange('Py')}
                                margin="normal"
                            />
                        </Grid> 
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'space-around'}}>                 
                                <TextField
                                    label="e"
                                    value={e}
                                    onChange={handleChange('e')}
                                    margin="normal"
                                />
                                <TextField
                                    label="k"
                                    value={k}
                                    onChange={handleChange('k')}
                                    margin="normal"
                                />
                        </Grid>
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'space-around'}}>                 
                                <TextField
                                    label="e * C"
                                    value={resultElGam.eC ? `${resultElGam.eC.x},${resultElGam.eC.y}` : ''}
                                    margin="normal"
                                />
                                <TextField
                                    label="k * C"
                                    value={resultElGam.kC ? `${resultElGam.kC.x},${resultElGam.kC.y}`: ''}
                                    margin="normal"
                                />
                        </Grid>   
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'space-around'}}>                 
                                <TextField
                                    label="(Pm + k * (e * C)) - (ekC)"
                                    value={resultElGam.res_Bob ? `${resultElGam.res_Bob.x},${resultElGam.res_Bob.y}` : ''}
                                    margin="normal"
                                />
                                <TextField
                                    label="Pm + k * (e * C)"
                                    value={resultElGam.Pm_sum_ekC ? `${resultElGam.Pm_sum_ekC.x},${resultElGam.Pm_sum_ekC.y}`: ''}
                                    margin="normal"
                                />
                        </Grid>  
                        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'center'}}>      
                            <Button color="primary" variant="outlined" style={{marginBottom: '2%'}} onClick={() => {
                                requestResultElGam({
                                    C:{x: Number(Cx), y: Number(Cy) },
                                    Pm:{x: Number(Px), y: Number(Py) },
                                    e: Number(e),
                                    k: Number(k),
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

export default ElGaMal