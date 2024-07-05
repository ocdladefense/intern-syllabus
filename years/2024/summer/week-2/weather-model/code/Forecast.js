

/**
 * Forecast.js
 * Represents the main forecast component for the app and renders the City Name,
 * Current temperature and and icon representing the current weather.  It then displays any remaining
 * weather Samples for today.
 * @params {Sample} current
 * @param {Array<Sample>} future
 * @param {Array<Summary>} summaries
 */

export default function Forecast(props) {
    // The current weather sample.
    let current = props.current;

    // A list of future samples (3-hour intervals).
    let samples = props.future;

    let summaries = props.summaries;

    let jsxArray = todaysSamples.map((sample) => <Sample s={sample} />);

    // let jsxSummaries  = summaries.map(summary => <Summary s={summary} />);

    return (
      <div id="upcoming-forecast">
        <h2>{current.city}</h2>
        <img src={current.icon} />
        <div class="big-current-temp">{current.temp}</div>
        <div class="city-name">{current.name}</div>
        <div class="upcoming-weather">{jsxArray}</div>
      </div>
    );
};
