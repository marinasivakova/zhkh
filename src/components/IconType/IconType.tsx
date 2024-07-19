import { Icon } from "../../styles/styles";

function IconType({ type }: { type: Array<string> }) {
  const hotWaterIcon = (
    <Icon>
      <svg
        width="10"
        height="14"
        viewBox="0 0 10 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.89218 0.42C5.89442 0.39678 5.89999 0.366731 5.89999 0.341464C5.89999 0.152976 5.76063 0 5.5889 0C5.51579 0 5.46441 0.0300488 5.44452 0.0385853C4.3883 0.491366 0.299988 4.95669 0.299988 8.87803C0.299988 11.7067 2.38941 14 4.96665 14C7.80059 14 9.63332 11.38 9.63332 8.87803C9.63332 4.71663 5.16486 3.94834 5.89218 0.42Z"
          fill="#F46B4D"
        />
      </svg>
      ГВС
    </Icon>
  );
  const coldWaterIcon = (
    <Icon>
      <svg
        width="10"
        height="14"
        viewBox="0 0 10 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.89218 0.42C5.89442 0.39678 5.89999 0.366731 5.89999 0.341464C5.89999 0.152976 5.76063 0 5.5889 0C5.51579 0 5.46441 0.0300488 5.44452 0.0385853C4.3883 0.491366 0.299988 4.95669 0.299988 8.87803C0.299988 11.7067 2.38941 14 4.96665 14C7.80059 14 9.63332 11.38 9.63332 8.87803C9.63332 4.71663 5.16486 3.94834 5.89218 0.42Z"
          fill="#3698FA"
        />
      </svg>
      ХВС
    </Icon>
  );

  return <>{type[0] === "HotWaterAreaMeter" ? hotWaterIcon : coldWaterIcon}</>;
}

export default IconType;