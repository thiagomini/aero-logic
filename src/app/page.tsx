import { createPageViewModel } from './pageViewModelService';
import { RandomRiddleEntryControl } from './RandomRiddleEntryControl';

export default function Home() {
  const model = createPageViewModel(new Date());

  return (
    <main className="text-xl">
      <div data-test="metadata">
        <p>Work Interval: {model.metadata.workInterval}</p>
        <RandomRiddleEntryControl />
      </div>
    </main>
  );
}
