import { ELEMENT_TYPE, IComponent, IElement } from 'domain/component';
import { EDIT_CONFIG_METADATA,IEditConfig,IPropertyConfig,IPropertyMetadata, METADATA_SECTION,MetadataSectionKey } from 'domain/edit-config';
import { IParameter } from 'domain/parameter';

export class PropertiesService {
  private parameters: IParameter[] = [];
  private metadata: IPropertyMetadata = EDIT_CONFIG_METADATA;

  public setParameters(parameters: IParameter[]): void {
    this.parameters = parameters;
  }

  private getParameterFromElement(component: IElement): IParameter | undefined {
    return this.parameters.find(p => p.name === component.dataSource);
  }

  private extractProperties<T extends METADATA_SECTION>(metadataSection: T,
    metadataKey: MetadataSectionKey<T>): IPropertyConfig[] {
    return this.metadata[metadataSection][metadataKey] || [];
  }

  private extractParameterProperties(element: IElement): IEditConfig[] {
    const parameter = this.getParameterFromElement(element);

    if (!parameter) {
      return [];
    }

    const res: IEditConfig[] = [];

    res.push({
      fields: this.extractProperties(METADATA_SECTION.CONTROL_TYPE,
        element.as),
      title: element.as,
    });

    res.push({
      fields: this.extractProperties(METADATA_SECTION.PARAMETER_TYPE,
        parameter?.type),
      title:  parameter?.type,
    });

    return res;
  }

  getComponentFields(component: IComponent): IEditConfig[] {
    const { type } = component;
    const res: IEditConfig[] = [];

    res.push({
      fields: this.extractProperties(METADATA_SECTION.ELEMENT_TYPE, type),
      title: type,
    });

    if (type === ELEMENT_TYPE.ELEMENT) {
      const fields = this.extractParameterProperties(component);
      fields && res.push(...fields);
    }

    // common fields
    res.push({
      fields: this.extractProperties(METADATA_SECTION.ELEMENT_TYPE, 'CONTROL'),
      title: 'Общие',
    });

    return res;
  }

}
