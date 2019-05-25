
import React, { Component, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class SummaPoints extends Component {

    render() { 
        const {handleChange, x1,x2,y1,y2, summa, mod, requestPointsSumm} = this.props;
        return (
            <Fragment>
                <Grid item xs={12} sm={12}>
                    <Paper square elevation={8}>
                        <Grid container spacing={24} style={{marginLeft: '5%', width: '90%', marginBottom: '0.5%'}}>
                            <Grid item xs={2} sm={2}>
                                <TextField
                                    fullWidth
                                    label="x1"
                                    value={x1}
                                    onChange={handleChange('x1')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <TextField
                                    fullWidth
                                    label="y1"
                                    value={y1}
                                    onChange={handleChange('y1')}
                                    margin="normal"
                                    type='number'
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <TextField
                                    fullWidth
                                    label="x2"
                                    value={x2}
                                    onChange={handleChange('x2')}
                                    margin="normal"
                                    type='number'
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <TextField
                                    fullWidth
                                    label="y2"
                                    value={y2}
                                    onChange={handleChange('y2')}
                                    margin="normal"
                                    type='number'
                                />
                            </Grid>
                        
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    fullWidth
                                    label="результат"
                                    value={ summa.x ? ` P( ${x1} , ${y1} ) + P( ${x2} , ${y2} ) = P( ${summa.x} , ${summa.y} )` : ''}
                                    margin="normal"
                                />
                            </Grid> 
                            <Grid item xs={12} sm={3}>
                                <Button color="primary" variant="outlined" onClick={
                                    () => {requestPointsSumm({
                                        p1: {x: Number(x1), y:Number(y1) },
                                        p2:{x: Number(x2), y: Number(y2)},
                                        m: Number(mod)
                                    })}
                                }>
                                    считать
                                </Button>
                            </Grid>
                        </Grid>                    
                    </Paper>                                       
                </Grid>
            </Fragment>
        )
    }
}

export default SummaPoints



 