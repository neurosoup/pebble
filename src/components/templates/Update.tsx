import { FetchResult, MutationFunctionOptions } from '@apollo/client';
import { Mutation } from '../../../graphql';
import { FormTemplate, FormMapping } from './Form';

interface Props<T, TData extends Pick<Mutation, keyof Mutation>> {
  object: Partial<T>;
  formMapping: FormMapping<Partial<T>>;
  onSubmit?: VoidFunction;
  updateMutationFunction: (options?: MutationFunctionOptions<TData, Partial<T>>) => Promise<FetchResult<TData>>;
}

const UpdateTemplate = <T, TData extends Pick<Mutation, keyof Mutation>>({ object, formMapping, onSubmit, updateMutationFunction }: Props<T, TData>) => {
  return (
    <FormTemplate
      object={object}
      mapping={formMapping}
      onSubmit={(value) => {
        onSubmit && onSubmit();
        updateMutationFunction({ variables: { ...value } });
      }}
    />
  );
};

export default UpdateTemplate;
