import { capitalizeLeadIndustry } from '../../../../../../globalFunctions';
import FormatTextForTitle from '../LeadsCards/FormatTextForTitle';
import { Spinner, locationIcon, calcTextLength, formatPricing, handleMapClick, FormatText } from './ImportTextAndDescription'

const TextAndDescription = ({ data, locationLoader, setLocationLoader }) => {
  const formattedPricing = formatPricing(
    data?.pricingRange?.minValue,
    data?.pricingRange?.maxValue,
    data?.pricingRange?.currency
  );

  return (
    <div className="textanddesccontainer">
      <FormatTextForTitle data={data?.leadTitle?.trim()} classStyle={"titletext"} />
      <div className={data?.leadsDescription === '' ? "" : "descriptiontext"}> <FormatText data={data?.leadsDescription?.trim()} /></div>
      <div className="locationandamountcontainer">
        <div className="leadslocation" >

          <div className={locationLoader ? 'container-img-loader-location' : 'd-none' }>
            <Spinner animation="border" variant="#fff" size="sm" className={locationLoader ? 'show-img-loader-location' : 'hide-img-loader'} />
          </div>
          <img
            className={locationLoader ? 'hide-img-loader' : data?.location?.fullAddress === '' ? "locationRemote" : 'leadslocationicon'}
            src={locationIcon}
            alt="location"
            onLoad={() => setLocationLoader(false)}
            onClick={() => data?.location?.fullAddress !== '' && handleMapClick(data?.location?.latitude, data?.location?.longitude)}
          />
          {data?.location?.fullAddress === '' ? (
            <span>Remote</span>
          ) : (
            <span className={  data?.pricingRange?.currency === '' ? 'leadsNoPrice' :  "leadslocationtext"} 
            onClick={() => handleMapClick(data?.location?.latitude, data?.location?.longitude)}>
              {typeof (data?.location) === 'string' ? calcTextLength(35, data?.location) :
                ` ${calcTextLength(35, data?.location?.fullAddress)}`}
            </span>
          )}

        </div>
        {data?.pricingRange?.currency !== '' && (data?.pricingRange?.currency==="$"|| data?.pricingRange?.currency==='₹')  ? (
                  <div className="pricecontainer">
                  <span className='currencysign'>{data?.pricingRange?.currency}</span>
                  <span className='leadsamount'>{formattedPricing}</span>
                </div>
        ): null}
      </div>
      <div className="leadscategory">{capitalizeLeadIndustry(data?.industry?.value)}</div>
    </div>
  );
};

export default TextAndDescription;