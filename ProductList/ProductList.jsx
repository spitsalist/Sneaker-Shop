import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Box, Stack, Typography, IconButton, styled } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ProductCard from '../../ProductCard/ProductCard.jsx';
import banner from '../../assets/Banner.svg'; 

const BannerImage = styled('img')({
    width: '100%',
    height: '480px',
    objectFit: 'cover',
    marginBottom: '20px',
});

const ProductList = () => {
    const requestUrl = 'https://6680826c56c2c76b495c327c.mockapi.io/shop/v1/productData'; 
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [startIndex, setStartIndex] = useState(0);

    const fetchDataAsync = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get(requestUrl);
            console.log(response.data);
            setProductData(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [requestUrl]);

    useEffect(() => {
        fetchDataAsync();
    }, [fetchDataAsync]);

    const scrollLeft = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
    };

    const scrollRight = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 3, productData.length - 3));
    };

    if (loading) {
        return <Typography color="primary.contrastText">Loading...</Typography>;
    }

    const visibleProducts = productData.slice(startIndex, startIndex + 3);

    return (
        <Stack spacing={3} padding={3}>
            <BannerImage src={banner} alt="banner" /> 
            <Typography variant='h4' fontWeight={700} gutterBottom>Product Cart</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <IconButton
                    onClick={scrollLeft}
                    disabled={startIndex === 0}
                    sx={{marginBottom: '300px'}}
                >
                    <ArrowBackIos />
                </IconButton>
                <Box
                    sx={{
                        width: '900px',
                        height: '600px',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 3,
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        '&::-webkit-scrollbar': {
                            height: '10px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#555',
                        },
                    }}
                >
                    {visibleProducts.map(product => (
                        <Box key={product.id} sx={{ flex: '0 0 auto' }}> 
                            <ProductCard
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                            />
                        </Box>
                    ))}
                </Box>
                <IconButton
                    onClick={scrollRight}
                    disabled={startIndex + 3 >= productData.length}
                    sx={{ marginBottom: '300px' }}
                >
                    <ArrowForwardIos />
                </IconButton>
            </Box>
        </Stack>
    );
};

export default ProductList;