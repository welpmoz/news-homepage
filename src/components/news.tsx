import "../scss/news.scss";

export default function News() {
  const news: NewProps[] = [
    {
      "newResume": "Will hydrogen-fueled cars ever catch up to EVs?",
      "newTitle": "Hydrogen VS Electric Cars",
      "isLast": false,
    },
    {
      "newResume": "What are the possible adverse effects of on-demand AI image generation?",
      "newTitle": "The Downsides of AI Artistry",
      "isLast": false,
    },
    {
      "newResume": "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      "newTitle": "Is VC Funding Drying Up",
      "isLast": true,
    },
  ];

  return (
    <div className="News Main-grid__news">
      <h2 className="News__title">New</h2>
      <div className="News__container">
        {
          news.map((recentNew, i) => <New key={i} {...recentNew} />)
        }
      </div>
    </div>
  );
}

interface NewProps {
  newTitle: string
  newResume: string
  isLast: boolean
}

function New({
  newResume,
  newTitle,
  isLast,
}: NewProps) {
  return (
    <>
      <div className="New">
        <h2 tabIndex={0} className="New__title">{newTitle}</h2>
        <span className="New__resume">{newResume}</span>
      </div>
      {!isLast && <hr className="News__separator" />}
    </>
  );
}