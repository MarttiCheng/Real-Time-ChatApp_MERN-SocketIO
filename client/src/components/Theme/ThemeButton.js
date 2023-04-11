// components
import { StyledBtnContainer, StyledThemeSwitch } from './ThemeButton.styled';

// context
import { useThemeContext } from '../../context/ThemeContext';

// packages
import { BiSun } from 'react-icons/bi';
import { BsMoonStars } from 'react-icons/bs';

const ThemeButton = () => {
   const { isDarkTheme, setIsDarkTheme } = useThemeContext();

   const handlePointerUp = () => {
      setIsDarkTheme(prev => !prev);
      localStorage.setItem('darkMode', JSON.stringify(!isDarkTheme));
   };

   return (
      <StyledBtnContainer
         darkMode={isDarkTheme}
         onPointerUp={() => handlePointerUp()}
      >
         <StyledThemeSwitch
            darkMode={isDarkTheme}
            type="checkbox"
         ></StyledThemeSwitch>
         <div>
            <span>{isDarkTheme ? <BsMoonStars /> : <BiSun />}</span>
         </div>
      </StyledBtnContainer>
   );
};

export default ThemeButton;
