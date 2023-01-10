import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Header from './common/header';
import SearchBar from './common/searchBar';
import { productData, sizeList } from '../mockData'

const ProductDetail = props => {
    const [ selectedColor, setSelectedColor ] = React.useState(0)
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>LOGO</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid>
                        <SearchBar/>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="ImageWrapper">
                            <img src={productData?.colors[selectedColor]?.image} className="imgRsp"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} className="defaultMargin">
                        <h3 className="alignLeft defaultMargin">{productData?.name}</h3>
                    </Grid>
                    <Grid item xs={12} className="defaultMargin">
                        <p className="labelText alignLeft defaultMargin">
                            {productData?.code}
                        </p>
                    </Grid>
                    <Grid item xs={12} className="defaultMargin">
                        <p className="labelText alignLeft">
                            Available Sizes:&nbsp;
                            {
                                sizeList?.map((size, idx) => <span className={productData?.sizesAvailable?.includes(size) ? 'sizeList sizeAvailable' : 'sizeList'} key={`${idx}_${size}`}>{size}</span>)
                            }
                        </p>
                    </Grid>
                    <Grid item xs={12} className="defaultMargin">
                        <p className="labelText alignLeft">Colors:</p>
                    </Grid>
                    <Grid item xs={12} className="defaultMargin">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                {
                                    productData.colors.map((color, idx) => (
                                        <Grid item xs={3}>
                                            <div style={{backgroundColor: color.colorCode, height: '20px', width: '20px', border: '1px solid' }} onClick={() => setSelectedColor(idx)} />
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className="defaultMargin">
                        <p className="labelText alignLeft">Description:</p>
                    </Grid>
                    <Grid item xs={12} className="defaultMargin">
                        <p className="labelText alignLeft">{productData.description}</p>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default ProductDetail