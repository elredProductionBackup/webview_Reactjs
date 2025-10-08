import { clearToasts } from 'react-simple-toasts';
import { useLocation, useNavigate, back, awardImg, bluetick, imgLable, pdfLable, AwardPreviewContainer, AwardTopContainer }
  from './ImportsAwardView'
import { useEffect } from 'react';

const AwardView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, userCode } = location?.state;

  const awardTopContainerProps = { back, data, awardImg, bluetick, navigate }
  const awardPreviewContainerProps = { data, pdfLable, imgLable, navigate, userCode }

  useEffect(() => {
    clearToasts();
  }, []);

  return (
    // <div className='award-view-Wrapper'>
      <div className="awardview">
        <AwardTopContainer {...awardTopContainerProps} />
        <AwardPreviewContainer {...awardPreviewContainerProps} />
      </div>
    // </div>

  );
};

export default AwardView;
