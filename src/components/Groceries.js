import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible, hide }) => {
  // const [] = useState
  return (
    <div className="groceries-container">
      <h2 className="groceries-heading">{title}</h2>
      {isVisible ? (
        <button onClick={() => hide("")}> Hide </button>
      ) : (
        <button onClick={() => setIsVisible()}> Show </button>
      )}

      {isVisible && <p className="groceries-desc">{description}</p>}
    </div>
  );
};
const Groceries = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <>
      <Section
        title={"Veggies"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={visibleSection === "Veggies"}
        setIsVisible={(item) => setVisibleSection(item ? "" : "Veggies")}
        hide={() => setVisibleSection("")}
      />
      <Section
        title={"Dairy"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={visibleSection === "Diary"}
        setIsVisible={() => setVisibleSection("Diary")}
        hide={() => setVisibleSection("")}
      />
      <Section
        title={"Frozen Foods"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={visibleSection === "Frozen Foods"}
        hide={() => setVisibleSection("")}
        setIsVisible={() => setVisibleSection("Frozen Foods")}
      />
    </>
  );
};

export default Groceries;
