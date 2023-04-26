import { FaTelegramPlane } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <h1 className="contacts__header">LETS CONNECT!</h1>

          <div className="contacts__contacts">
            <p>
              I am open for your ideas and looking for permanent job offers! @:
            </p>
            <div>
              <a href="https://t.me/l42864728">
                <FaTelegramPlane />
                @l4288672
              </a>

              <a href="mailto:larin.ia28@gmail.com">
                <TfiEmail />
                larin.ia28@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
