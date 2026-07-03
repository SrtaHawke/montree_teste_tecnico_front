import { FormEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import { SendHorizontal } from "lucide-react";

interface ChatComposerProps {
    value: string;
    disabled: boolean;
    canSend: boolean;
    onChange: (value: string) => void;
    onSend: () => void;
}

export function ChatComposer({
                                 value,
                                 disabled,
                                 canSend,
                                 onChange,
                                 onSend,
                             }: ChatComposerProps) {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSend();
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            onSend();
        }
    }

    return (
        <ComposerForm onSubmit={handleSubmit}>
            <Input
                value={value}
                disabled={disabled}
                placeholder="Digite sua mensagem..."
                maxLength={500}
                onChange={(event) => onChange(event.target.value)}
                onKeyDown={handleKeyDown}
            />

            <SendButton type="submit" disabled={!canSend} aria-label="Enviar mensagem">
                <SendHorizontal size={20} />
            </SendButton>
        </ComposerForm>
    );
}

const ComposerForm = styled.form`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const Input = styled.input`
    flex: 1;
    height: 48px;
    padding: 0 ${({ theme }) => theme.spacing.lg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.full};
    outline: none;
    background: ${({ theme }) => theme.colors.surfaceSoft};
    box-shadow: ${({ theme }) => theme.shadow.input};
    transition: 0.2s ease;
    color:${({theme})=>theme.colors.text};
    &::placeholder{
        color:${({theme})=>theme.colors.muted};
    }
    &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
    }
`;

const SendButton = styled.button`
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.sentBubble};
  color: white;
  box-shadow: ${({ theme }) => theme.shadow.input};
  transition: 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;