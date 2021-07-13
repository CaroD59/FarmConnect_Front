import StyledLegalNotice from './styles';

function LegalNotice() {
  return (
    <StyledLegalNotice>
      <div className="legalNoticePage">
        <div className="legalNoticeContent">
          <h1 className="legalNoticeTitle">Mentions Légales</h1>
          <p className="legalNoticeText">
            Cette page établiera les mentions légales de la plateforme Farm
            Connect
          </p>
        </div>
      </div>
    </StyledLegalNotice>
  );
}

export default LegalNotice;
