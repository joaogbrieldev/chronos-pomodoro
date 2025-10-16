import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/task-context/useTaskContext';
import type { TaskModel } from '../../models/taskModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleTyoe';
import { Cycles } from '../cycles';
import { DefaultButton } from '../defaultButton';
import { DefaultInput } from '../defaultInput';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!taskNameInput.current?.value) return;
    const taskName = taskNameInput.current.value.trim();
    const newTask: TaskModel = {
      id: crypto.randomUUID(),
      name: taskName,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prev => ({
      ...prev,
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining,
      formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
      tasks: [...prev.tasks, newTask],
    }));
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          label='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {state.currentCycle > 0 && (
        <div className='formRow'>
          <p>Task: {state.activeTask?.name}</p>
        </div>
      )}
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />}>Enviar</DefaultButton>
      </div>
    </form>
  );
}
