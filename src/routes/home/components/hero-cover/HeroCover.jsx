import GlobalSearchBox from 'components/global-search-box/GlobalSearchbox';
import { Carousel } from 'components/ux/carousel';

/**
 * HeroCover Component
 * Renders the hero cover section of the home page.
 * @param {Object} props - The component props.
 * @param {String} props.locationInputValue - The location input value.
 * @param {String} props.numGuestsInputValue - The number of guests input value.
 * @param {Boolean} props.isDatePickerVisible - The date picker visibility state.
 * @param {Function} props.onLocationChangeInput - The location input change handler.
 * @param {Function} props.onNumGuestsInputChange - The number of guests input change handler.
 * @param {Object} props.dateRange - The date range object.
 * @param {Function} props.onDateChangeHandler - The date change handler.
 * @param {Function} props.onDatePickerIconClick - The date picker icon click handler.
 * @param {Function} props.onSearchButtonAction - The search button click handler.
 * @param {Array} props.locationTypeheadResults - The location typehead results.
 * @param {Function} props.setisDatePickerVisible - The date picker visibility state setter.
 * @returns {JSX.Element} - The HeroCover component.
 */
const HeroCover = (props) => {
  const {
    locationInputValue,
    numGuestsInputValue,
    isDatePickerVisible,
    onLocationChangeInput,
    onNumGuestsInputChange,
    dateRange,
    onDateChangeHandler,
    onDatePickerIconClick,
    onSearchButtonAction,
    locationTypeheadResults,
    setisDatePickerVisible,
  } = props;

  // Sample images for the carousel - replace these with your actual hotel images
  const heroImages = [
    'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/02/fairmont-banff-springs-hotel-alberta-e1424037962473.jpg?fit=970%2C546&ssl=1',
    'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2020/01/herbay.jpg?fit=1500%2C844&ssl=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/e6/1b/74/palm-meadows-club.jpg?w=1200&h=-1&s=1',
    'https://www.oberoihotels.com/images/oberoihotels/exotic-vacations/ev-video-thumb.jpg',
    'https://www.viceroybali.com/wp-content/uploads/2024/12/Most-Luxury-resorts-in-the-world-2-1024x577.png',
    'https://media.cnn.com/api/v1/images/stellar/prod/171122165337-ultimate-india-hotels-wildflower-hall-shimla-in-the-himalayas-an-oberoi-resort.jpg?q=w_4500,h_3000,x_0,y_0,c_fill',
  ];

  return (
    <div className="relative h-[400px] min-h-[400px] w-full text-slate-100 mb-8 overflow-hidden rounded-b-lg">
      {/* Carousel Background */}
      <div className="absolute inset-0 h-full w-full pointer-events-auto">
        <Carousel 
          images={heroImages}
          autoPlay={true}
          interval={5000}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 h-full w-full bg-black/50 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full container mx-auto px-2 md:px-0 pointer-events-auto">
        <div className="hero-content__text py-4 text-center">
          <h3 className="text-4xl font-medium">
            Discover your perfect stay around the globe
          </h3>
          <p className="my-1">
            Enter your dates to see the latest prices and begin your journey of
            relaxation and adventure today.
          </p>
        </div>
        <GlobalSearchBox
          locationInputValue={locationInputValue}
          locationTypeheadResults={locationTypeheadResults}
          numGuestsInputValue={numGuestsInputValue}
          isDatePickerVisible={isDatePickerVisible}
          setisDatePickerVisible={setisDatePickerVisible}
          onLocationChangeInput={onLocationChangeInput}
          onNumGuestsInputChange={onNumGuestsInputChange}
          dateRange={dateRange}
          onDateChangeHandler={onDateChangeHandler}
          onDatePickerIconClick={onDatePickerIconClick}
          onSearchButtonAction={onSearchButtonAction}
        />
      </div>
    </div>
  );
};

export default HeroCover;
