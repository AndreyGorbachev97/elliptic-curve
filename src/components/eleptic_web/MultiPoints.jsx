
import React, { Component, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class MultiPoints extends Component {

    render() { 
        const {handleChange, x_mult, y_mult, mult, multi, mod, requestPointsMulti, a} = this.props;
        return (
            <Fragment>
                 <Grid item xs={12} sm={12}>
                    <Paper square elevation={8}>
                    <Grid container spacing={24} style={{marginLeft: '5%', width: '90%'}}>
                            <Grid item xs={1} sm={2}>
                                <TextField
                                    fullWidth
                                    label="x_mult"
                                    value={x_mult}
                                    onChange={handleChange('x_mult')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={1} sm={2}>
                                <TextField
                                    fullWidth
                                    label="y_mult"
                                    value={y_mult}
                                    onChange={handleChange('y_mult')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={1} sm={2}>
                                <TextField
                                    fullWidth
                                    label="mult"
                                    value={mult}
                                    onChange={handleChange('mult')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    fullWidth
                                    label="результат"
                                    value={ multi.x ? ` P( ${x_mult} , ${y_mult} ) * ${mult} = P( ${multi.x} , ${multi.y} )` : ''}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Button color="primary" variant="outlined" onClick={() => {
                                    this.props.requestPointsMulti({
                                        p:{x: Number(x_mult), y: Number(y_mult) },
                                        a: Number(a),                                                 
                                        mult: Number(mult),
                                        m: Number(mod),
                                    })
                                }}>
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

export default MultiPoints
