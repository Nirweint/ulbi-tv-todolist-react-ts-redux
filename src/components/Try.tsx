import React from 'react';

const websiteGroups = [
  {
    websiteGroup: 'OTA',
    groupCoefficients: {
      initial: { name: 1, address: 0.5, web: 1, fax: 0.2, email: 0.3 },
      reaudit: { name: 2, address: 0.5, web: 1, fax: 0.5, email: 0.2 }
    },
    website: [
      {
        webName: 'agoda.com',
        coefficients: {
          initial: { name: 3, fax: 0.25, email: 0.6 },
          reaudit: { name: 4, address: 10, fax: 10 }
        }
      },
      {
        webName: 'GPTS',
        coefficients: {
          initial: { name: 5, address: 1, web: 1, fax: 0.3, email: 0.25 },
          reaudit: { name: 6, address: 6, web: 6, fax: 6, email: 6 }
        }
      }
    ]
  },
  {
    websiteGroup: 'DIRECTORIES',
    groupCoefficients: {
      initial: { name: 0.5, address: 1, web: 2, fax: 0.2, email: 0.3 },
      reaudit: { name: 0.2, address: 2, web: 1, fax: 0.25, email: 0.6 }
    },
    website: []
  }

];

const Try = () => {
  return (
    <div>
      {websiteGroups.map((group) => {
        return (<ul>
          {group.websiteGroup}
          {group.website.map((sites) => {
            return (<li>{sites.webName}</li>)
          })}
        </ul>)
      })}
    </div>
  );
};

export default Try;