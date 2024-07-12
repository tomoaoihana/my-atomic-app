import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import { memo } from "react";

export const UserCard = memo((props) => {
  console.log("UserCard");
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <div>
          <dt>メール</dt>
          <dd>{user.email}</dd>
        </div>
        <div>
          <dt>tel</dt>
          <dd>{user.phone}</dd>
        </div>
        <div>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
        </div>
        <div>
          <dt>web</dt>
          <dd>{user.website}</dd>
        </div>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  dt {
    min-width: 100px;
  }
  dd {
    margin-left: 0;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
