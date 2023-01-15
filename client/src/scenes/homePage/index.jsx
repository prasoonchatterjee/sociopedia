import { useSelector } from 'react-redux';
import Navbar from 'scenes/navbar';
import UserWidget from 'scenes/widgets/UserWidget';
import { Box, useMediaQuery } from '@mui/material';

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <Box>
      <Navbar />
      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap='0.5rem'
        justifyContent='space-between'
      >
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
      </Box>
      <Box
        flexBasis={isNonMobileScreens ? '42%' : undefined}
        mt={isNonMobileScreens ? undefined : '2rem'}
      ></Box>
      {isNonMobileScreens && <Box flexBasis='26%'></Box>}
    </Box>
  );
};

export default HomePage;
