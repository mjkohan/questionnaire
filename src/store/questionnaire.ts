import { create } from 'zustand'

interface State {
    currentStep: number
    answers: Record<number, string | number>
    setAnswer: (id: number, value: string | number) => void
    goTo: (step: number) => void
    reset: () => void
}

export const useQuestionnaireStore = create<State>((set) => ({
    currentStep: 0,
    answers: {},
    setAnswer: (id, value) => set((state) => ({
        answers: { ...state.answers, [id]: value },
    })),
    goTo: (step) => set(() => ({ currentStep: step })),
    reset: () => set(() => ({ currentStep: 0, answers: {} })),
}))